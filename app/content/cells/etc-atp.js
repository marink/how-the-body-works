import { Typography } from '@mui/material';
import TwoColumnSection from '@components/TwoColumnSection';

const ETCSVG = () => (
    <svg viewBox="0 0 520 320" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrRight" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#2471A3" />
            </marker>
            <marker id="arrUp2" markerWidth="7" markerHeight="7" refX="3.5" refY="2" orient="auto">
                <path d="M0,7 L3.5,0 L7,7 Z" fill="#E74C3C" />
            </marker>
            <marker id="arrDown2" markerWidth="7" markerHeight="7" refX="3.5" refY="5" orient="auto">
                <path d="M0,0 L3.5,7 L7,0 Z" fill="#27AE60" />
            </marker>
            <marker id="arrDownGray" markerWidth="7" markerHeight="7" refX="3.5" refY="5" orient="auto">
                <path d="M0,0 L3.5,7 L7,0 Z" fill="#555" />
            </marker>
        </defs>

        {/* Intermembrane space */}
        <rect x="0"  y="0"   width="520" height="85"  fill="#EBF5FB" rx="0" />
        <text x="10" y="16"  fontSize="10" fill="#1A5276" fontWeight="600">Intermembrane Space (H⁺-rich)</text>

        {/* Inner membrane */}
        <rect x="0"  y="85"  width="520" height="30"  fill="#1A5276" />
        <text x="10" y="105" fontSize="10" fill="#fff"    fontWeight="600">Inner Mitochondrial Membrane</text>

        {/* Matrix */}
        <rect x="0"  y="115" width="520" height="205" fill="#A9DFBF" />
        <text x="10" y="310" fontSize="10" fill="#196F3D" fontWeight="600">Mitochondrial Matrix</text>

        {/* ── Complex I ── */}
        <rect x="20"  y="65" width="72" height="90" rx="7" fill="#2471A3" />
        <text x="56"  y="95"  textAnchor="middle" fontSize="9"  fill="white" fontWeight="700">Complex I</text>
        <text x="56"  y="108" textAnchor="middle" fontSize="8"  fill="#AED6F1">NADH</text>
        <text x="56"  y="119" textAnchor="middle" fontSize="8"  fill="#AED6F1">Dehydrogenase</text>
        {/* NADH in */}
        <text x="32"  y="155" fontSize="8" fill="#8E44AD" fontWeight="600">NADH→NAD⁺</text>

        {/* ── Complex II ── */}
        <rect x="112" y="73" width="68" height="73" rx="7" fill="#1F618D" />
        <text x="146" y="100" textAnchor="middle" fontSize="9"  fill="white" fontWeight="700">Complex II</text>
        <text x="146" y="113" textAnchor="middle" fontSize="8"  fill="#AED6F1">Succinate DH</text>
        <text x="146" y="126" textAnchor="middle" fontSize="8"  fill="#AED6F1">(no H⁺ pump)</text>
        {/* FADH2 in */}
        <text x="116" y="155" fontSize="8" fill="#E67E22" fontWeight="600">FADH₂→FAD</text>

        {/* ── CoQ shuttle ── */}
        <ellipse cx="205" cy="100" rx="16" ry="16" fill="#F39C12" stroke="#E67E22" strokeWidth="1.5" />
        <text x="205" y="104" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">CoQ</text>

        {/* ── Complex III ── */}
        <rect x="230" y="65" width="72" height="90" rx="7" fill="#1A5276" />
        <text x="266" y="95"  textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Complex III</text>
        <text x="266" y="108" textAnchor="middle" fontSize="8" fill="#AED6F1">Cytochrome</text>
        <text x="266" y="119" textAnchor="middle" fontSize="8" fill="#AED6F1">bc₁ Complex</text>

        {/* ── Cyt c shuttle ── */}
        <ellipse cx="322" cy="58" rx="14" ry="14" fill="#E74C3C" stroke="#C0392B" strokeWidth="1.5" />
        <text x="322" y="62" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">Cyt c</text>

        {/* ── Complex IV ── */}
        <rect x="340" y="65" width="72" height="90" rx="7" fill="#117A65" />
        <text x="376" y="95"  textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Complex IV</text>
        <text x="376" y="108" textAnchor="middle" fontSize="8" fill="#A2D9CE">Cytochrome c</text>
        <text x="376" y="119" textAnchor="middle" fontSize="8" fill="#A2D9CE">Oxidase</text>
        {/* O2 + H → H2O */}
        <text x="342" y="152" fontSize="7.5" fill="#196F3D">O₂+4H⁺ → 2H₂O</text>

        {/* ── ATP Synthase ── */}
        <rect x="432" y="60" width="74" height="100" rx="7" fill="#7D3C98" />
        <text x="469" y="90"  textAnchor="middle" fontSize="9"  fill="white" fontWeight="700">ATP</text>
        <text x="469" y="103" textAnchor="middle" fontSize="9"  fill="white" fontWeight="700">Synthase</text>
        <text x="469" y="117" textAnchor="middle" fontSize="8"  fill="#D7BDE2">(Complex V)</text>
        {/* Rotor indicator */}
        <ellipse cx="469" cy="135" rx="18" ry="10" fill="#9B59B6" />
        <text x="469" y="139" textAnchor="middle" fontSize="7" fill="white">rotor</text>

        {/* Electron flow arrow (blue, along membrane top) */}
        <path d="M 92 87 Q 150 60 222 88" fill="none" stroke="#2471A3" strokeWidth="2"
            markerEnd="url(#arrRight)" strokeDasharray="5,3" />
        <path d="M 222 87 Q 265 60 302 75" fill="none" stroke="#2471A3" strokeWidth="2"
            markerEnd="url(#arrRight)" strokeDasharray="5,3" />
        <path d="M 335 65 Q 360 50 382 68" fill="none" stroke="#2471A3" strokeWidth="2"
            markerEnd="url(#arrRight)" strokeDasharray="5,3" />

        {/* H+ pumping up arrows (red) from Complex I, III, IV */}
        <line x1="56"  y1="65" x2="56"  y2="18" stroke="#E74C3C" strokeWidth="2" markerEnd="url(#arrUp2)" />
        <line x1="266" y1="65" x2="266" y2="18" stroke="#E74C3C" strokeWidth="2" markerEnd="url(#arrUp2)" />
        <line x1="376" y1="65" x2="376" y2="18" stroke="#E74C3C" strokeWidth="2" markerEnd="url(#arrUp2)" />
        <text x="25"  y="38" fontSize="9" fill="#C0392B" fontWeight="600">4H⁺</text>
        <text x="244" y="38" fontSize="9" fill="#C0392B" fontWeight="600">4H⁺</text>
        <text x="354" y="38" fontSize="9" fill="#C0392B" fontWeight="600">4H⁺</text>

        {/* H+ flowing back down through ATP synthase */}
        <line x1="469" y1="18" x2="469" y2="58" stroke="#27AE60" strokeWidth="2.5" markerEnd="url(#arrDown2)" />
        <text x="480" y="38" fontSize="9" fill="#196F3D" fontWeight="600">H⁺↓</text>

        {/* ADP+Pi → ATP arrow out of synthase */}
        <line x1="469" y1="160" x2="469" y2="200" stroke="#7D3C98" strokeWidth="2" markerEnd="url(#arrDownGray)" />
        <rect x="432" y="200" width="74" height="28" rx="6" fill="#F1C40F" />
        <text x="469" y="218" textAnchor="middle" fontSize="10" fill="#7D6608" fontWeight="700">ATP</text>

        {/* ADP+Pi label */}
        <text x="396" y="185" fontSize="8" fill="#7D3C98">ADP + Pᵢ</text>
        <text x="402" y="196" fontSize="8" fill="#7D3C98">→ ATP</text>

        {/* ATP tally box */}
        <rect x="8" y="220" width="240" height="90" rx="8" fill="#EBF5FB" stroke="#2471A3" strokeWidth="1.5" />
        <text x="128" y="237" textAnchor="middle" fontSize="10" fill="#1A5276" fontWeight="700">Total ATP per Glucose</text>
        <text x="20"  y="254" fontSize="9" fill="#555">Glycolysis:</text>
        <text x="190" y="254" textAnchor="end" fontSize="9" fill="#27AE60" fontWeight="600">2 ATP</text>
        <text x="20"  y="269" fontSize="9" fill="#555">Krebs Cycle:</text>
        <text x="190" y="269" textAnchor="end" fontSize="9" fill="#27AE60" fontWeight="600">2 ATP</text>
        <text x="20"  y="284" fontSize="9" fill="#555">ETC (NADH + FADH₂):</text>
        <text x="190" y="284" textAnchor="end" fontSize="9" fill="#27AE60" fontWeight="600">~28–32 ATP</text>
        <line x1="20" y1="290" x2="220" y2="290" stroke="#2471A3" strokeWidth="1" />
        <text x="20"  y="304" fontSize="10" fill="#1A5276" fontWeight="700">Grand Total:</text>
        <text x="190" y="304" textAnchor="end" fontSize="10" fill="#1A5276" fontWeight="700">~30–36 ATP</text>
    </svg>
);

export default function ETCandATP() {
    return (
        <TwoColumnSection figure={<ETCSVG />}>
            <Typography variant="h2" component="h2" gutterBottom>
                Step 5 — Electron Transport Chain & ATP Synthesis
            </Typography>
            <Typography component="p" gutterBottom>
                This is where the bulk of ATP is made. NADH and FADH₂ — the electron carriers
                accumulated in glycolysis, the PDC step, and the Krebs cycle — deliver their
                electrons to a chain of four protein complexes embedded in the <strong>inner
                mitochondrial membrane</strong>.
            </Typography>
            <Typography component="p" gutterBottom>
                As electrons flow "downhill" through Complexes I → CoQ → III → Cytochrome c → IV → O₂,
                the released energy pumps <strong>protons (H⁺)</strong> from the matrix into the
                intermembrane space. Complex II (fed by FADH₂) transfers electrons but does
                <em> not</em> pump protons, which is why FADH₂ yields less ATP than NADH.
                Oxygen is the final electron acceptor at Complex IV, combining with electrons and
                protons to form <strong>water</strong>.
            </Typography>
            <Typography component="p" gutterBottom>
                The resulting <strong>proton gradient</strong> (high H⁺ in the intermembrane space,
                low in the matrix) is a form of stored potential energy — the <em>proton-motive force</em>.
                Protons rush back into the matrix through <strong>ATP Synthase (Complex V)</strong>,
                which uses the flow to rotate a molecular rotor. This rotation drives the synthesis
                of ATP from ADP + phosphate — a process called <strong>chemiosmosis</strong>.
            </Typography>
            <Typography component="p">
                The ETC yields approximately <strong>28–32 ATP</strong> per glucose, dwarfing the
                combined 4 ATP from glycolysis and the Krebs cycle. The grand total — ~30–36 ATP
                per glucose — is why aerobic respiration is ~18× more efficient than anaerobic
                fermentation.
            </Typography>
        </TwoColumnSection>
    );
}
