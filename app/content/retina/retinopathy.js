import { Typography, Box } from "@mui/material";
import Section from "@components/Section";
import TwoColumnSection from "@components/TwoColumnSection";
import Ref from "@components/Ref";
import References from "@components/References";
import { REFS } from "@app/content/references";

export const PAGE_REFS = [
    { n: 1, ...REFS.cheungRetinopathy },
    { n: 2, ...REFS.antonettiRetinopathy },
    { n: 3, ...REFS.pericyteLoss },
    { n: 4, ...REFS.brownleeUnifyingMechanism },
    { n: 5, ...REFS.vegfRetina },
    { n: 6, ...REFS.fung_diabetesCode },
    { n: 7, ...REFS.taylorTwinCycle },
];

// ── SVG helpers ───────────────────────────────────────────────────────────────

// Curved vessel branch from (x1,y1) to (x2,y2) with control point
function vessel(x1, y1, cx, cy, x2, y2, width = 1.8, color = "#8B0000") {
    return <path d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`} fill="none" stroke={color} strokeWidth={width} />;
}

// ── Fundus: Normal retina ─────────────────────────────────────────────────────
const NormalRetinaFundus = () => (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
            <radialGradient id="retinaNorm" cx="40%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#C0392B" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#922B21" />
                <stop offset="100%" stopColor="#4A0E0E" />
            </radialGradient>
            <clipPath id="fundusCircleN">
                <circle cx="150" cy="150" r="140" />
            </clipPath>
            <radialGradient id="discGlowN" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF9C4" />
                <stop offset="100%" stopColor="#F9A825" />
            </radialGradient>
            <radialGradient id="maculaN" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4A0000" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7B0000" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="150" cy="150" r="140" fill="#1A0000" />

        {/* Retinal background */}
        <circle cx="150" cy="150" r="136" fill="url(#retinaNorm)" clipPath="url(#fundusCircleN)" />

        <g clipPath="url(#fundusCircleN)">
            {/* Optic disc */}
            <ellipse cx="210" cy="150" rx="22" ry="26" fill="url(#discGlowN)" />
            <ellipse cx="210" cy="150" rx="10" ry="12" fill="#FFF176" opacity="0.6" />

            {/* Major vessels from disc */}
            {vessel(210, 150, 180, 110, 100, 80,  2.5, "#6B0000")}
            {vessel(210, 150, 175, 130, 90,  130, 2.2, "#6B0000")}
            {vessel(210, 150, 180, 170, 100, 200, 2.5, "#6B0000")}
            {vessel(210, 150, 185, 190, 110, 230, 2.0, "#6B0000")}

            {/* Secondary branches */}
            {vessel(160, 95,  140, 80,  120, 70,  1.4, "#8B1A1A")}
            {vessel(150, 105, 130, 95,  100, 100, 1.4, "#8B1A1A")}
            {vessel(155, 175, 135, 185, 105, 195, 1.4, "#8B1A1A")}
            {vessel(160, 200, 140, 215, 115, 225, 1.3, "#8B1A1A")}

            {/* Arterioles (lighter) */}
            {vessel(210, 148, 175, 115, 130, 90,  1.2, "#E88080")}
            {vessel(210, 152, 178, 178, 130, 200, 1.2, "#E88080")}

            {/* Macula (fovea) — darker depression */}
            <circle cx="120" cy="152" r="28" fill="url(#maculaN)" />
            <circle cx="120" cy="152" r="5"  fill="#2C0000" opacity="0.7" />
        </g>

        {/* Lens glare */}
        <ellipse cx="100" cy="85" rx="18" ry="10" fill="white" opacity="0.07" transform="rotate(-30 100 85)" />
    </svg>
);

// ── Fundus: Diabetic retinopathy (NPDR + early PDR) ──────────────────────────
const DiabeticRetinaFundus = () => (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
            <radialGradient id="retinaDR" cx="40%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#B03A2E" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#7B241C" />
                <stop offset="100%" stopColor="#4A0E0E" />
            </radialGradient>
            <clipPath id="fundusCircleDR">
                <circle cx="150" cy="150" r="140" />
            </clipPath>
            <radialGradient id="discGlowDR" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF9C4" />
                <stop offset="100%" stopColor="#F9A825" />
            </radialGradient>
            <radialGradient id="maculaDR" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3D0000" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7B0000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="edemaGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFECB3" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
            </radialGradient>
        </defs>

        <circle cx="150" cy="150" r="140" fill="#1A0000" />
        <circle cx="150" cy="150" r="136" fill="url(#retinaDR)" />

        <g clipPath="url(#fundusCircleDR)">
            {/* Same vessel structure */}
            {vessel(210, 150, 180, 110, 100, 80,  2.5, "#6B0000")}
            {vessel(210, 150, 175, 130, 90,  130, 2.2, "#6B0000")}
            {vessel(210, 150, 180, 170, 100, 200, 2.5, "#6B0000")}
            {vessel(210, 150, 185, 190, 110, 230, 2.0, "#6B0000")}
            {vessel(160, 95,  140, 80,  120, 70,  1.4, "#8B1A1A")}
            {vessel(150, 105, 130, 95,  100, 100, 1.4, "#8B1A1A")}
            {vessel(155, 175, 135, 185, 105, 195, 1.4, "#8B1A1A")}
            {vessel(210, 148, 175, 115, 130, 90,  1.2, "#E88080")}
            {vessel(210, 152, 178, 178, 130, 200, 1.2, "#E88080")}

            {/* Microaneurysms — tiny red dots */}
            {[
                [108, 88], [85, 125], [95, 148], [138, 110], [78, 168],
                [130, 185], [155, 225], [102, 210], [170, 130], [88, 200],
                [145, 95], [112, 165],
            ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3.5" fill="#8B0000" opacity="0.9" />
            ))}

            {/* Dot-and-blot hemorrhages — larger dark red blots */}
            {[
                [92, 140], [125, 175], [107, 105], [145, 220], [80, 185],
            ].map(([cx, cy], i) => (
                <ellipse key={i} cx={cx} cy={cy} rx="6" ry="5" fill="#4A0000" opacity="0.85" />
            ))}

            {/* Hard exudates — yellowish waxy deposits */}
            {[
                [115, 140], [108, 155], [125, 158], [100, 162], [118, 170],
                [132, 143], [140, 160],
            ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="#FDD835" opacity="0.75" />
            ))}

            {/* Cotton-wool spots — fluffy white patches */}
            {[[165, 105], [82, 155]].map(([cx, cy], i) => (
                <ellipse key={i} cx={cx} cy={cy} rx="12" ry="8" fill="white" opacity="0.45" />
            ))}

            {/* Macular edema halo */}
            <circle cx="120" cy="152" r="38" fill="url(#edemaGrad)" />
            <circle cx="120" cy="152" r="5" fill="#2C0000" opacity="0.7" />

            {/* Neovascularization near disc (early PDR) — fine tangled vessels */}
            <path d="M205,130 Q215,118 222,122 Q230,126 218,135 Q210,140 205,130 Z"
                fill="none" stroke="#FF5252" strokeWidth="1.2" opacity="0.8" />
            <path d="M218,135 Q228,140 232,148 Q236,155 225,155"
                fill="none" stroke="#FF5252" strokeWidth="1.0" opacity="0.8" />

            {/* Optic disc */}
            <ellipse cx="210" cy="150" rx="22" ry="26" fill="url(#discGlowDR)" />
            <ellipse cx="210" cy="150" rx="10" ry="12" fill="#FFF176" opacity="0.6" />
        </g>

        <ellipse cx="100" cy="85" rx="18" ry="10" fill="white" opacity="0.07" transform="rotate(-30 100 85)" />
    </svg>
);

// ── SVG: Retinal cross-section showing pericyte loss & edema ─────────────────
const RetinalCrossSectionSvg = () => (
    <svg viewBox="0 0 440 260" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrBlue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#1565C0" />
            </marker>
            <marker id="arrRed2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#C62828" />
            </marker>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="440" height="260" rx="8" fill="#FFF8F0" />

        {/* ── LEFT PANEL: Healthy capillary ── */}
        <text x="88" y="18" textAnchor="middle" fontSize="10" fill="#1B5E20" fontWeight="700">Healthy Capillary</text>

        {/* Capillary tube */}
        <rect x="30" y="55" width="116" height="40" rx="20" fill="#FFCDD2" stroke="#E53935" strokeWidth="2" />
        {/* Blood cells inside */}
        {[55, 88, 118].map(x => (
            <ellipse key={x} cx={x} cy="75" rx="10" ry="7" fill="#E53935" opacity="0.7" />
        ))}
        {/* Endothelial label */}
        <text x="88" y="50" textAnchor="middle" fontSize="8" fill="#B71C1C">endothelium</text>
        <line x1="88" y1="52" x2="88" y2="55" stroke="#B71C1C" strokeWidth="1" />

        {/* Pericytes (healthy, green blobs hugging vessel wall) */}
        <ellipse cx="42" cy="72" rx="9" ry="12" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5" opacity="0.85" />
        <ellipse cx="134" cy="80" rx="9" ry="12" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5" opacity="0.85" />
        <text x="88" y="105" textAnchor="middle" fontSize="8" fill="#2E7D32" fontWeight="600">pericytes intact</text>
        <text x="88" y="116" textAnchor="middle" fontSize="8" fill="#2E7D32">tight junctions ✓</text>
        <text x="88" y="127" textAnchor="middle" fontSize="8" fill="#2E7D32">no fluid leak ✓</text>

        {/* Retinal layers on right side of healthy capillary */}
        <text x="88" y="150" textAnchor="middle" fontSize="8" fill="#555">— retinal layers —</text>
        {[
            { y: 162, label: "Nerve fibre layer",     color: "#B3E5FC" },
            { y: 175, label: "Inner nuclear layer",    color: "#E8EAF6" },
            { y: 188, label: "Outer nuclear layer",    color: "#F3E5F5" },
            { y: 201, label: "Photoreceptors",         color: "#FBE9E7" },
            { y: 214, label: "RPE",                    color: "#795548", text: "white" },
        ].map(({ y, label, color, text }) => (
            <g key={y}>
                <rect x="15" y={y} width="146" height="12" fill={color} />
                <text x="88" y={y + 9} textAnchor="middle" fontSize="7.5" fill={text || "#333"}>{label}</text>
            </g>
        ))}

        {/* Divider */}
        <line x1="175" y1="15" x2="175" y2="245" stroke="#CCC" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* ── RIGHT PANEL: Diabetic capillary ── */}
        <text x="308" y="18" textAnchor="middle" fontSize="10" fill="#B71C1C" fontWeight="700">Hyperglycemic Capillary</text>

        {/* Capillary tube — dilated / microaneurysm */}
        <path d="M 190,62 Q 200,42 230,40 Q 260,38 270,55 Q 290,58 310,60 Q 330,60 345,58 Q 360,56 365,75 Q 360,94 345,92 Q 330,90 310,90 Q 290,90 270,85 Q 260,92 230,90 Q 200,88 190,78 Z"
            fill="#FFCDD2" stroke="#E53935" strokeWidth="2" />
        {/* Blood in lumen */}
        {[210, 245, 285, 325].map(x => (
            <ellipse key={x} cx={x} cy="66" rx="9" ry="6" fill="#E53935" opacity="0.65" />
        ))}

        {/* Microaneurysm bulge label */}
        <text x="232" y="30" textAnchor="middle" fontSize="8" fill="#B71C1C" fontWeight="600">microaneurysm</text>
        <line x1="232" y1="32" x2="232" y2="40" stroke="#B71C1C" strokeWidth="1" markerEnd="url(#arrRed2)" />

        {/* Pericytes — dead / missing */}
        <text x="195" y="82" textAnchor="middle" fontSize="14" fill="#B71C1C" opacity="0.7">✕</text>
        <text x="358" y="82" textAnchor="middle" fontSize="14" fill="#B71C1C" opacity="0.7">✕</text>
        <text x="280" y="110" textAnchor="middle" fontSize="8" fill="#B71C1C" fontWeight="600">pericytes lost</text>
        <text x="280" y="121" textAnchor="middle" fontSize="8" fill="#B71C1C">tight junctions broken</text>

        {/* Fluid leaking out arrows */}
        <line x1="230" y1="90" x2="220" y2="130" stroke="#1565C0" strokeWidth="1.8" markerEnd="url(#arrBlue)" />
        <line x1="265" y1="90" x2="262" y2="130" stroke="#1565C0" strokeWidth="1.8" markerEnd="url(#arrBlue)" />
        <line x1="295" y1="90" x2="300" y2="130" stroke="#1565C0" strokeWidth="1.8" markerEnd="url(#arrBlue)" />
        <text x="280" y="127" textAnchor="middle" fontSize="8" fill="#1565C0" fontWeight="600">plasma leaks out</text>

        {/* Edema pool in retinal layers */}
        <rect x="188" y="145" width="184" height="85" rx="4" fill="#FFF8E1" stroke="#F9A825" strokeWidth="1" />
        {[
            { y: 148, label: "Nerve fibre layer",     color: "#B3E5FC" },
            { y: 161, label: "Inner nuclear layer",    color: "#E8EAF6" },
        ].map(({ y, label, color }) => (
            <g key={y}>
                <rect x="190" y={y} width="180" height="12" fill={color} />
                <text x="280" y={y + 9} textAnchor="middle" fontSize="7.5" fill="#333">{label}</text>
            </g>
        ))}
        {/* Oedema blobs */}
        {[[215, 185], [248, 192], [280, 187], [310, 191], [338, 184]].map(([cx, cy], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx="14" ry="8" fill="#FFD54F" stroke="#F9A825" strokeWidth="1" opacity="0.75" />
        ))}
        <text x="280" y="208" textAnchor="middle" fontSize="8" fill="#F57F17" fontWeight="600">macular oedema</text>
        <text x="280" y="220" textAnchor="middle" fontSize="8" fill="#F57F17">(fluid accumulation)</text>
        <text x="280" y="232" textAnchor="middle" fontSize="8" fill="#E65100" fontWeight="600">→ blurred / distorted vision</text>
    </svg>
);

// ── SVG: Progression stages ───────────────────────────────────────────────────
const ProgressionSvg = () => {
    const stages = [
        { x: 10,  label: "Normal",       sub: "healthy vessels\npericytes intact",   color: "#2E7D32", bg: "#E8F5E9" },
        { x: 118, label: "Mild NPDR",    sub: "microaneurysms\nfirst sign",           color: "#F57F17", bg: "#FFF8E1" },
        { x: 226, label: "Mod/Sev NPDR", sub: "hemorrhages\nexudates · edema",       color: "#E65100", bg: "#FBE9E7" },
        { x: 334, label: "PDR",          sub: "neovascularization\nblindness risk",   color: "#B71C1C", bg: "#FFEBEE" },
    ];
    return (
        <svg viewBox="0 0 450 120" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
                <marker id="arrStage" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#888" />
                </marker>
            </defs>
            {stages.map(({ x, label, sub, color, bg }) => (
                <g key={x}>
                    <rect x={x} y="10" width="100" height="100" rx="8" fill={bg} stroke={color} strokeWidth="1.5" />
                    <text x={x + 50} y="34" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{label}</text>
                    {sub.split('\n').map((line, i) => (
                        <text key={i} x={x + 50} y={52 + i * 14} textAnchor="middle" fontSize="9" fill="#555">{line}</text>
                    ))}
                </g>
            ))}
            {[110, 218, 326].map(x => (
                <line key={x} x1={x} y1="60" x2={x + 8} y2="60" stroke="#888" strokeWidth="2" markerEnd="url(#arrStage)" />
            ))}
            <text x="225" y="115" textAnchor="middle" fontSize="9" fill="#888">NPDR = non-proliferative · PDR = proliferative diabetic retinopathy</text>
        </svg>
    );
};

// ── Main component ────────────────────────────────────────────────────────────
export default function Retinopathy() {
    return (
        <>
            <Typography component="p" gutterBottom>
                Diabetic retinopathy is the leading cause of blindness in working-age adults
                worldwide.<Ref n={1} /> The retina — a paper-thin sheet of neurons lining the back of the
                eye — depends entirely on a dense network of tiny blood vessels. Chronic
                hyperglycemia attacks those vessels first, and the damage is silent until it
                is almost too late to reverse.
            </Typography>

            {/* ── 1. What the retina is ── */}
            <Section>
                <Typography id="retina-anatomy" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    The Retina: Why It Is So Vulnerable
                </Typography>
                <Typography component="p" gutterBottom>
                    The retina is among the most metabolically active tissues in the body —
                    per gram, it consumes more oxygen than almost any other organ. This
                    demand is served by two vascular networks: the retinal capillaries
                    (innermost layers) and the choroidal circulation (outer layers). The
                    retinal capillaries are unusually delicate:
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, my: 1 }}>
                    {[
                        'They lack autoregulation — cannot constrict to buffer glucose spikes',
                        'They are surrounded by pericytes, supporting cells that are exquisitely sensitive to glucose toxicity',
                        'They maintain the blood–retinal barrier, analogous to the blood–brain barrier',
                    ].map(t => (
                        <Typography key={t} component="li" gutterBottom sx={{ fontSize: '0.93rem' }}>{t}</Typography>
                    ))}
                </Box>
                <Typography component="p">
                    When pericytes die — the first detectable lesion in diabetic eye disease —
                    the capillary wall weakens and leaks.<Ref n={3} />
                </Typography>
            </Section>

            {/* ── 2. Fundus comparison ── */}
            <Section alt>
                <Typography id="fundus-comparison" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    What the Eye Doctor Sees
                </Typography>
                <Typography component="p" gutterBottom sx={{ mb: 2 }}>
                    The images below simulate what an ophthalmoscope (fundus camera) reveals.
                    The optic disc appears as the bright oval; blood vessels branch outward;
                    the macula (central vision) sits to the left. In the diabetic eye,
                    several hallmark lesions appear:
                </Typography>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3,
                    mb: 2,
                }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 6px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
                            aspectRatio: '1',
                        }}>
                            <NormalRetinaFundus />
                        </Box>
                        <Typography sx={{ mt: 1.5, fontWeight: 700, fontSize: '0.9rem', color: '#1B5E20' }}>
                            Normal Retina
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 6px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
                            aspectRatio: '1',
                        }}>
                            <DiabeticRetinaFundus />
                        </Box>
                        <Typography sx={{ mt: 1.5, fontWeight: 700, fontSize: '0.9rem', color: '#B71C1C' }}>
                            Diabetic Retinopathy
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                    {[
                        { label: 'Normal Retina', items: ['Clear vessels, uniform calibre', 'Bright optic disc, intact macula', 'No hemorrhages or deposits'] },
                        { label: 'Diabetic Retinopathy', items: ['Red dots = microaneurysms', 'Dark blots = hemorrhages', 'Yellow spots = hard exudates (fat/protein leaks)', 'White patches = cotton-wool spots (ischaemia)', 'Fine red tangle near disc = new vessels (PDR)'] },
                    ].map(({ label, items }) => (
                        <Box key={label}>
                            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', mb: 0.5 }}>{label}</Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {items.map(t => (
                                    <Typography key={t} component="li" sx={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{t}</Typography>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Section>

            {/* ── 3. Mechanism ── */}
            <Section>
                <TwoColumnSection figure={<RetinalCrossSectionSvg />}>
                    <Typography id="mechanism" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                        The Molecular Cascade
                    </Typography>
                    <Typography component="p" gutterBottom>
                        Michael Brownlee's unifying mechanism<Ref n={4} /> — excess glucose overloading
                        mitochondria → electron leak → reactive oxygen species (ROS) —
                        hits retinal pericytes especially hard, because they cannot
                        downregulate glucose uptake when blood sugar rises.
                    </Typography>
                    <Typography component="p" gutterBottom>
                        ROS and AGEs damage the basement membrane shared by endothelial
                        cells and pericytes. Without pericyte support:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, my: 1 }}>
                        {[
                            'Tight junctions between endothelial cells break down',
                            'Plasma proteins and lipids leak into the retina → hard exudates',
                            'Fluid accumulates in the macula → macular oedema → blurred vision',
                            'Capillaries form microaneurysms (pressure bulges) then close entirely',
                            'Ischaemic retina releases VEGF — triggering neovascularisation',
                        ].map(t => (
                            <Typography key={t} component="li" gutterBottom sx={{ fontSize: '0.93rem' }}>{t}</Typography>
                        ))}
                    </Box>
                    <Typography component="p" sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>
                        The cross-section diagram (left) shows healthy vs hyperglycaemic capillaries
                        in the retina — note the microaneurysm bulge, the missing pericytes (✕),
                        and the fluid pooling as macular oedema.
                    </Typography>
                </TwoColumnSection>
            </Section>

            {/* ── 4. Progression ── */}
            <Section alt>
                <Typography id="progression" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    Four Stages of Diabetic Retinopathy
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <ProgressionSvg />
                </Box>
                <Box component="ul" sx={{ pl: 2.5, my: 1 }}>
                    {[
                        { stage: 'Mild NPDR', detail: 'Microaneurysms only — detectable by ophthalmoscopy but no symptoms. Fully reversible with glucose control.' },
                        { stage: 'Moderate NPDR', detail: 'Dot-and-blot hemorrhages, hard exudates, cotton-wool spots. Vision begins to be affected if the macula is involved.' },
                        { stage: 'Severe NPDR', detail: 'More than 20 hemorrhages in each quadrant, venous beading, retinal ischaemia. High risk of progression to PDR within a year.' },
                        { stage: 'Proliferative DR (PDR)', detail: 'VEGF drives neovascularisation — fragile new vessels bleed into the vitreous. Traction retinal detachment and blindness become real risks.' },
                    ].map(({ stage, detail }) => (
                        <Typography key={stage} component="li" gutterBottom sx={{ fontSize: '0.93rem' }}>
                            <strong>{stage}:</strong> {detail}
                        </Typography>
                    ))}
                </Box>
                <Typography component="p">
                    Anti-VEGF injections (e.g. ranibizumab, bevacizumab) have transformed the
                    treatment of PDR and macular oedema,<Ref n={5} /> but they treat the
                    consequence, not the cause.
                </Typography>
            </Section>

            {/* ── 5. Dr Fung's angle ── */}
            <Section>
                <Typography id="fung-root-cause" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    Dr. Fung's Perspective — Treating the Root Cause
                </Typography>
                <Typography component="p" gutterBottom>
                    In <em>The Diabetes Code</em>,<Ref n={6} /> Dr. Jason Fung frames diabetic
                    retinopathy not as an inevitable complication of diabetes but as a
                    downstream consequence of the same root cause he traces throughout the
                    book: <strong>chronic hyperinsulinaemia driving chronic hyperglycaemia</strong>.
                </Typography>
                <Typography component="p" gutterBottom>
                    His logic is direct: every end-organ complication — retinopathy,
                    nephropathy, neuropathy — shares the same upstream driver. The fatty
                    liver overflows into a fatty pancreas (Roy Taylor's twin-cycle hypothesis<Ref n={7} />),
                    β-cells fail, blood glucose rises uncontrolled, and years of vascular
                    oxidative stress accumulate silently in the retina.
                </Typography>
                <Typography component="p" gutterBottom>
                    The corollary is hopeful: in patients who achieve genuine remission of
                    Type 2 Diabetes — through very-low-calorie diet or extended fasting —
                    early retinopathy lesions stabilise and, in some cases, regress.
                    Microaneurysms can disappear when blood glucose is normalized before
                    permanent structural scarring occurs.
                </Typography>
                <Typography component="p" sx={{ fontStyle: 'italic', color: 'text.secondary', fontSize: '0.9rem' }}>
                    "You cannot outrun a bad diet with eye injections. The only durable
                    treatment for diabetic eye disease is fixing the blood sugar — and
                    the only durable way to fix the blood sugar is to remove the cause."
                    — paraphrasing Dr. Fung
                </Typography>
            </Section>

            <References items={PAGE_REFS} />
        </>
    );
}
