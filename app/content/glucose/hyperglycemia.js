import { Typography, Box } from "@mui/material";
import Link from 'next/link';
import Section from "@components/Section";
import TwoColumnSection from "@components/TwoColumnSection";
import Figure from "@components/Figure";
import Ref from "@components/Ref";
import References from "@components/References";
import { REFS } from "@app/content/references";

export const PAGE_REFS = [
    { n: 1, ...REFS.glucosePhysiology },
    { n: 2, ...REFS.brownleeUnifyingMechanism },
    { n: 3, ...REFS.advancedGlycationEndProducts },
    { n: 4, ...REFS.mitochondrialDysfunctionDiabetes },
    { n: 5, ...REFS.insulinResistance },
    { n: 6, ...REFS.apoptosisHighGlucose },
    { n: 7, ...REFS.fung_diabetesCode },
    { n: 8, ...REFS.taylorTwinCycle },
    { n: 9, ...REFS.limFattyPancreas },
];

// ── SVG: Reactive Oxygen Species ─────────────────────────────────────────────
function hex(cx, cy, r) {
    const a = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
    });
    return a.join(' ');
}

const ROSSvg = () => (
    <svg viewBox="0 0 420 240" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#C0392B" />
            </marker>
            <marker id="arrGray" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#7F8C8D" />
            </marker>
            <radialGradient id="cellGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FDEBD0" />
                <stop offset="100%" stopColor="#FAD7A0" />
            </radialGradient>
        </defs>

        {/* Cell body */}
        <ellipse cx="210" cy="120" rx="170" ry="100" fill="url(#cellGrad)" stroke="#E59866" strokeWidth="2.5" />
        <text x="210" y="22" textAnchor="middle" fontSize="11" fill="#784212" fontWeight="600">Cell flooded with glucose</text>

        {/* Glucose hexagons flooding in */}
        <polygon points={hex(50, 60, 16)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="50" y="64" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>

        <polygon points={hex(25, 110, 16)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="25" y="114" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>

        <polygon points={hex(50, 165, 16)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="50" y="169" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>

        <line x1="66" y1="63" x2="88" y2="78" stroke="#E67E22" strokeWidth="2" markerEnd="url(#arrGray)" />
        <line x1="41" y1="110" x2="65" y2="110" stroke="#E67E22" strokeWidth="2" markerEnd="url(#arrGray)" />
        <line x1="66" y1="163" x2="88" y2="150" stroke="#E67E22" strokeWidth="2" markerEnd="url(#arrGray)" />

        {/* Mitochondria (inner ellipse) */}
        <ellipse cx="185" cy="120" rx="62" ry="42" fill="#AED6F1" stroke="#2471A3" strokeWidth="2" />
        <ellipse cx="183" cy="116" rx="35" ry="22" fill="#85C1E9" stroke="#1F618D" strokeWidth="1.5" />
        <text x="185" y="114" textAnchor="middle" fontSize="9" fill="#1A5276" fontWeight="700">Mitochondria</text>
        <text x="185" y="127" textAnchor="middle" fontSize="8" fill="#1A5276">overloaded</text>

        {/* ROS bursting out */}
        {[[320, 70], [340, 115], [325, 165], [295, 50], [365, 90]].map(([cx, cy], i) => (
            <g key={i}>
                <circle cx={cx} cy={cy} r="14" fill="#FDEDEC" stroke="#C0392B" strokeWidth="1.5" />
                <text x={cx} y={cy + 4} textAnchor="middle" fontSize="13" fill="#C0392B" fontWeight="900">•</text>
                <text x={cx} y={cy - 3} textAnchor="middle" fontSize="8" fill="#C0392B" fontWeight="700">ROS</text>
            </g>
        ))}

        <line x1="250" y1="100" x2="300" y2="80" stroke="#C0392B" strokeWidth="1.8" markerEnd="url(#arrRed)" strokeDasharray="4,2" />
        <line x1="255" y1="120" x2="322" y2="115" stroke="#C0392B" strokeWidth="1.8" markerEnd="url(#arrRed)" strokeDasharray="4,2" />
        <line x1="250" y1="142" x2="306" y2="158" stroke="#C0392B" strokeWidth="1.8" markerEnd="url(#arrRed)" strokeDasharray="4,2" />

        <text x="340" y="192" textAnchor="middle" fontSize="9" fill="#922B21" fontWeight="600">Reactive Oxygen</text>
        <text x="340" y="203" textAnchor="middle" fontSize="9" fill="#922B21" fontWeight="600">Species (ROS)</text>
        <text x="340" y="214" textAnchor="middle" fontSize="8" fill="#922B21">damage DNA &amp; membranes</text>
    </svg>
);

// ── SVG: AGE Glycation ───────────────────────────────────────────────────────
const AGESvg = () => (
    <svg viewBox="0 0 420 200" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrBlack" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#444" />
            </marker>
        </defs>

        {/* Background panels */}
        <rect x="4" y="10" width="155" height="180" rx="8" fill="#EBF5FB" stroke="#AED6F1" strokeWidth="1" />
        <rect x="261" y="10" width="155" height="180" rx="8" fill="#FDEBD0" stroke="#F0B27A" strokeWidth="1" />

        {/* Labels */}
        <text x="82" y="28" textAnchor="middle" fontSize="11" fill="#1A5276" fontWeight="700">Normal Protein</text>
        <text x="338" y="28" textAnchor="middle" fontSize="11" fill="#784212" fontWeight="700">AGE</text>
        <text x="338" y="42" textAnchor="middle" fontSize="9" fill="#A04000">(glycated protein)</text>

        {/* Protein chain - left */}
        {[35, 60, 85, 110, 135].map((x, i) => (
            <g key={i}>
                <circle cx={x} cy={110} r="12" fill="#5B2C6F" stroke="#7D3C98" strokeWidth="1.5" />
                <text x={x} y={114} textAnchor="middle" fontSize="8" fill="white" fontWeight="600">AA</text>
                {i < 4 && <line x1={x + 12} y1={110} x2={x + 23} y2={110} stroke="#7D3C98" strokeWidth="2" />}
            </g>
        ))}

        {/* Glucose hexagon floating above protein - left */}
        <polygon points={hex(82, 67, 14)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="82" y="71" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>
        <text x="82" y="155" textAnchor="middle" fontSize="8" fill="#1A5276">healthy function</text>

        {/* Arrow */}
        <line x1="164" y1="105" x2="254" y2="105" stroke="#444" strokeWidth="2" markerEnd="url(#arrBlack)" />
        <text x="210" y="96" textAnchor="middle" fontSize="9" fill="#555" fontWeight="600">glycation</text>
        <text x="210" y="108" textAnchor="middle" fontSize="8" fill="#888">(non-enzymatic)</text>

        {/* AGE protein - right, distorted */}
        {[282, 305, 332, 358, 381].map((x, i) => {
            const yOffset = [0, 12, -8, 10, -4][i];
            const nextX = [305, 332, 358, 381][i];
            const nextY = [12, -8, 10, -4][i];
            return (
                <g key={i}>
                    <circle cx={x} cy={110 + yOffset} r="12" fill="#A04000" stroke="#784212" strokeWidth="1.5" />
                    <text x={x} y={114 + yOffset} textAnchor="middle" fontSize="7" fill="#FAD7A0" fontWeight="600">AA</text>
                    {i < 4 && <line x1={x + 12} y1={110 + yOffset} x2={nextX - 12} y2={110 + nextY} stroke="#784212" strokeWidth="2" />}
                </g>
            );
        })}

        {/* Glucose "stuck" to AGE */}
        <polygon points={hex(332, 82, 12)} fill="#CA6F1E" stroke="#A04000" strokeWidth="1.5" />
        <text x="332" y="86" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">Glc</text>
        <line x1="332" y1="94" x2="332" y2="99" stroke="#A04000" strokeWidth="2" />

        <text x="338" y="155" textAnchor="middle" fontSize="8" fill="#784212">stiff · inflamed</text>
        <text x="338" y="166" textAnchor="middle" fontSize="8" fill="#784212">vessel damage</text>
    </svg>
);

// ── SVG: Dr Fung's Two-Phase Model ───────────────────────────────────────────
const FattyOrgansSvg = () => (
    <svg viewBox="0 0 460 230" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrFung" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M0,0 L9,4.5 L0,9 Z" fill="#6D4C41" />
            </marker>
        </defs>

        {/* Phase 1 box */}
        <rect x="8" y="10" width="185" height="210" rx="10" fill="#FFF8E1" stroke="#F9A825" strokeWidth="1.5" />
        <text x="100" y="30" textAnchor="middle" fontSize="12" fill="#F57F17" fontWeight="700">Phase 1</text>
        <text x="100" y="44" textAnchor="middle" fontSize="10" fill="#F57F17">Fatty Liver</text>

        {/* Liver shape */}
        <path d="M 45 130 Q 50 75 110 80 Q 160 78 168 115 Q 172 145 140 165 Q 110 178 75 165 Q 42 155 45 130 Z"
            fill="#C0392B" stroke="#922B21" strokeWidth="2" opacity="0.85" />
        <text x="107" y="130" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">LIVER</text>

        {/* Fat droplets in liver */}
        {[[72, 115], [100, 110], [128, 108], [90, 140], [118, 138], [148, 125]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="9" fill="#FFEE58" stroke="#F9A825" strokeWidth="1" opacity="0.9" />
        ))}

        <text x="100" y="192" textAnchor="middle" fontSize="8" fill="#6D4C41">Excess sugar → fat</text>
        <text x="100" y="204" textAnchor="middle" fontSize="8" fill="#6D4C41">stored in liver</text>
        <text x="100" y="215" textAnchor="middle" fontSize="8" fill="#E65100" fontWeight="600">(insulin resistance)</text>

        {/* Arrow between phases */}
        <line x1="196" y1="115" x2="258" y2="115" stroke="#6D4C41" strokeWidth="2.5" markerEnd="url(#arrFung)" />
        <text x="228" y="106" textAnchor="middle" fontSize="9" fill="#6D4C41" fontWeight="600">spills</text>
        <text x="228" y="118" textAnchor="middle" fontSize="9" fill="#6D4C41" fontWeight="600">over</text>
        <text x="228" y="130" textAnchor="middle" fontSize="8" fill="#888">→ fat exports</text>
        <text x="228" y="141" textAnchor="middle" fontSize="8" fill="#888">to pancreas</text>

        {/* Phase 2 box */}
        <rect x="265" y="10" width="187" height="210" rx="10" fill="#FCE4EC" stroke="#E91E63" strokeWidth="1.5" />
        <text x="358" y="30" textAnchor="middle" fontSize="12" fill="#C2185B" fontWeight="700">Phase 2</text>
        <text x="358" y="44" textAnchor="middle" fontSize="10" fill="#C2185B">Fatty Pancreas</text>

        {/* Pancreas shape (elongated blob) */}
        <path d="M 285 120 Q 300 95 340 98 Q 375 96 410 108 Q 430 118 418 135 Q 408 148 375 150 Q 340 154 308 145 Q 282 138 285 120 Z"
            fill="#F06292" stroke="#C2185B" strokeWidth="2" opacity="0.85" />
        <text x="352" y="128" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">PANCREAS</text>

        {/* Fat droplets in pancreas */}
        {[[300, 120], [325, 115], [352, 112], [375, 118], [398, 124], [315, 135], [360, 138]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="7" fill="#FFEE58" stroke="#F9A825" strokeWidth="1" opacity="0.9" />
        ))}

        {/* Beta cell with X */}
        <rect x="303" y="155" width="110" height="28" rx="6" fill="#FFCDD2" stroke="#E53935" strokeWidth="1" />
        <text x="358" y="164" textAnchor="middle" fontSize="8" fill="#B71C1C" fontWeight="700">β-cell dysfunction</text>
        <text x="358" y="175" textAnchor="middle" fontSize="8" fill="#B71C1C">insulin output ↓</text>

        <text x="358" y="196" textAnchor="middle" fontSize="8" fill="#6D4C41">Fat poisons β-cells →</text>
        <text x="358" y="207" textAnchor="middle" fontSize="8" fill="#880E4F" fontWeight="600">Type 2 Diabetes</text>
    </svg>
);

// ── Main component ────────────────────────────────────────────────────────────
export default function Hyperglycemia() {
    return (
        <>
            <Typography component="p" gutterBottom>
                When blood glucose remains persistently elevated — a condition known as
                <strong> hyperglycemia</strong> — cells throughout the body suffer a cascade of
                molecular injuries<Ref n={1} />. The damage spans from individual proteins and organelles
                all the way up to entire organs. Here is how it unfolds.
            </Typography>

            {/* ── 1. Oxidative stress ── */}
            <Section>
                <TwoColumnSection figure={
                    <Figure
                        src="/images/oxidative-stress.png"
                        alt="Glucose overload causing oxidative stress"
                        sx={{ width: '100%', height: 'auto', borderRadius: 2,
                              boxShadow: '0 4px 24px rgba(0,0,0,0.09), 0 1px 6px rgba(0,0,0,0.06)' }}
                    />
                }>
                    <Typography id="oxidative-stress" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                        Glucose Overload &amp; Oxidative Stress
                    </Typography>
                    <Typography component="p" gutterBottom>
                        When cells are overwhelmed with glucose, the electron transport chain in mitochondria
                        receives far more substrate than it can process cleanly. Electrons "leak" off the
                        chain and combine with oxygen to form <strong>reactive oxygen species (ROS)</strong> —
                        unstable free radicals that attack DNA, membrane lipids, and structural proteins.<Ref n={2} />
                    </Typography>
                    <Typography component="p" gutterBottom>
                        This oxidative stress is the master trigger behind most of the downstream complications
                        of chronic hyperglycemia, including neuropathy,{' '}
                        <Link href="/endocrine-system/retinopathy" style={{ color: '#1565C0' }}>
                            retinopathy
                        </Link>
                        , and cardiovascular damage.
                    </Typography>
                </TwoColumnSection>
            </Section>

            {/* ── 2. AGEs ── */}
            <Section alt>
                <TwoColumnSection reversed figure={<AGESvg />}>
                    <Typography id="ages" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                        Advanced Glycation End Products (AGEs)
                    </Typography>
                    <Typography component="p" gutterBottom>
                        Excess glucose reacts spontaneously with proteins and fats in a process called
                        <strong> non-enzymatic glycation</strong>. The resulting molecules — AGEs — are
                        chemically altered structures that the body cannot repair normally.<Ref n={3} />
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, my: 1 }}>
                        {[
                            'Stiffen collagen in blood-vessel walls, raising blood pressure',
                            'Activate inflammatory signaling through the RAGE receptor',
                            'Damage kidney filtration membranes (diabetic nephropathy)',
                            'Cloud the lens of the eye (diabetic cataracts)',
                        ].map(text => (
                            <Typography key={text} component="li" gutterBottom sx={{ fontSize: '0.93rem' }}>
                                {text}
                            </Typography>
                        ))}
                    </Box>
                    <Typography component="p">
                        AGE accumulation is a major reason why years of elevated blood sugar translate into
                        structural damage that cannot simply be reversed by lowering glucose later.
                    </Typography>
                </TwoColumnSection>
            </Section>

            {/* ── 3. Mitochondrial overload ── */}
            <Section>
                <TwoColumnSection figure={<ROSSvg />}>
                    <Typography id="mitochondria" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                        Mitochondrial Overload
                    </Typography>
                    <Typography component="p" gutterBottom>
                        Muscle cells, neurons, and heart cells are energetically demanding and rely heavily
                        on mitochondria. Too much glucose floods the citric-acid cycle and electron transport
                        chain, causing the mitochondria to:<Ref n={4} />
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, my: 1 }}>
                        {[
                            'Leak electrons, generating excess ROS (see diagram)',
                            'Lose membrane potential — reducing ATP yield',
                            'Fragment their inner membrane (cristae), impairing function',
                            'Trigger mitochondrial apoptosis pathways',
                        ].map(text => (
                            <Typography key={text} component="li" gutterBottom sx={{ fontSize: '0.93rem' }}>
                                {text}
                            </Typography>
                        ))}
                    </Box>
                    <Typography component="p">
                        The analogy is an engine running on too much fuel with a clogged exhaust —
                        the heat and backpressure damage the engine itself.
                    </Typography>
                </TwoColumnSection>
            </Section>

            {/* ── 4. Insulin resistance / lipotoxicity ── */}
            <Section alt>
                <Typography id="insulin-resistance" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    Insulin Resistance &amp; Lipid Accumulation
                </Typography>
                <Typography component="p" gutterBottom>
                    Chronically high glucose drives the pancreas to secrete more and more insulin. Over
                    time, cells become desensitized — a state called <strong>insulin resistance</strong>.<Ref n={5} />
                    With glucose unable to enter cells efficiently, blood sugar stays elevated,
                    and the liver converts the excess into fat:
                </Typography>
                <Typography component="p" gutterBottom>
                    Fat accumulates in <em>non-fat tissues</em> — the liver and skeletal muscle in
                    particular. This <strong>lipotoxicity</strong> amplifies inflammation, disrupts
                    intracellular signaling, and accelerates cell death. It also creates a vicious cycle:
                    fat in the liver worsens insulin resistance, which raises glucose further.
                </Typography>
            </Section>

            {/* ── 5. Dr Fung's two-phase model ── */}
            <Section>
                <TwoColumnSection figure={<FattyOrgansSvg />}>
                    <Typography id="fung-two-phase" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                        The Two-Phase Model — Dr. Jason Fung
                    </Typography>
                    <Typography component="p" gutterBottom>
                        In <em>The Diabetes Code</em><Ref n={7} />, Dr. Jason Fung synthesizes research by
                        Roy Taylor<Ref n={8} /><Ref n={9} /> into a compelling two-phase explanation of how
                        chronic sugar consumption progresses to Type 2 Diabetes:
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <strong>Phase 1 — Fatty Liver:</strong> Years of high sugar intake overflow the
                        liver's glycogen stores. The liver converts the surplus into fat
                        (<em>de novo lipogenesis</em>), which accumulates within liver cells. This fatty
                        liver is the first organ to become insulin resistant, forcing the pancreas to
                        compensate with ever-higher insulin secretion.
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <strong>Phase 2 — Fatty Pancreas:</strong> When the liver becomes too saturated
                        with fat, it begins exporting fat into the bloodstream (as VLDL). This fat
                        deposits in the pancreas, directly poisoning the insulin-producing
                        <strong> β-cells</strong>. Once β-cell function collapses, the body can no longer
                        control blood glucose — Type 2 Diabetes has arrived.
                    </Typography>
                    <Typography component="p" sx={{ fontStyle: 'italic', color: 'text.secondary', fontSize: '0.88rem' }}>
                        The hopeful implication: because fat accumulation is the cause, dramatic caloric
                        restriction or fasting can reverse both stages — restoring β-cell function and
                        resolving diabetes in many patients.
                    </Typography>
                </TwoColumnSection>
            </Section>

            {/* ── 6. Apoptosis ── */}
            <Section alt>
                <Typography id="apoptosis" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    Apoptosis — Programmed Cell Death
                </Typography>
                <Typography component="p" gutterBottom>
                    When oxidative stress, mitochondrial dysfunction, and toxic fat accumulation persist
                    long enough, cells activate <strong>apoptosis</strong> — a controlled self-destruction
                    program designed to contain damage.<Ref n={6} /> The cell packages its contents into
                    membrane-bound fragments (apoptotic bodies) that neighboring immune cells clear away.
                </Typography>
                <Typography component="p" gutterBottom>
                    In the pancreas this is catastrophic: β-cells lost to apoptosis are not replaced.
                    In nerves (peripheral neuropathy) and retinal cells (retinopathy) the same
                    irreversible loss occurs — explaining why diabetic complications are easier to
                    prevent than to reverse.
                </Typography>
            </Section>

            {/* ── 7. Analogy ── */}
            <Section>
                <Typography id="analogy" component="h2" variant="h2" gutterBottom sx={{ mt: 1 }}>
                    Why "Fried"? — The Unifying Analogy
                </Typography>
                <Typography component="p" gutterBottom>
                    Dr. Fung's "fried" metaphor captures the mechanism precisely. Just as food burns when
                    exposed to excess heat or oil, cells are damaged when flooded with excess fuel:
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, my: 1 }}>
                    {[
                        'Oxidative stress (ROS) = the heat that chars the surface',
                        'AGEs = the caramelization that stiffens and discolors proteins',
                        'Mitochondrial burnout = the engine overheating from too much fuel',
                        'Fatty liver → fatty pancreas = the oil that eventually destroys the pan',
                    ].map(text => (
                        <Typography key={text} component="li" gutterBottom sx={{ fontSize: '0.93rem' }}>
                            {text}
                        </Typography>
                    ))}
                </Box>
                <Typography component="p">
                    The "burning" is not literal — it is oxidative and metabolic damage.
                    But the result is the same: a cell that can no longer function normally.
                </Typography>
            </Section>

            <References items={PAGE_REFS} />
        </>
    );
}
