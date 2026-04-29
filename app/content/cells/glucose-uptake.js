import { Typography } from '@mui/material';
import TwoColumnSection from '@components/TwoColumnSection';

// Pointy-top hexagon centered at (cx,cy) with radius r
function hex(cx, cy, r) {
    const pts = [
        [cx,         cy - r],
        [cx + r * 0.866, cy - r * 0.5],
        [cx + r * 0.866, cy + r * 0.5],
        [cx,         cy + r],
        [cx - r * 0.866, cy + r * 0.5],
        [cx - r * 0.866, cy - r * 0.5],
    ];
    return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
}

const GlucoseUptakeSVG = () => (
    <svg viewBox="0 0 520 300" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#E67E22" />
            </marker>
        </defs>

        {/* Extracellular space */}
        <rect x="0" y="0" width="520" height="100" fill="#EBF5FB" />
        <text x="12" y="18" fontSize="11" fill="#1A5276" fontWeight="600">Extracellular space (bloodstream)</text>

        {/* Outer leaflet heads */}
        <rect x="0" y="100" width="520" height="18" fill="#1A5276" />
        {/* Hydrophobic tails */}
        <rect x="0" y="118" width="520" height="44" fill="#2471A3" opacity="0.45" />
        {/* Inner leaflet heads */}
        <rect x="0" y="162" width="520" height="18" fill="#1A5276" />

        {/* Cytoplasm */}
        <rect x="0" y="180" width="520" height="120" fill="#FEFDE7" />
        <text x="12" y="288" fontSize="11" fill="#7D6608" fontWeight="600">Cytoplasm</text>

        {/* Membrane label */}
        <text x="8" y="145" fontSize="10" fill="#fff" fontWeight="600">Phospholipid Bilayer</text>

        {/* GLUT4 transporter protein */}
        <rect x="228" y="88" width="64" height="106" rx="10" fill="#7D3C98" />
        <rect x="240" y="88" width="40" height="10" rx="5" fill="#A569BD" />
        <rect x="240" y="184" width="40" height="10" rx="5" fill="#A569BD" />
        <text x="260" y="136" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">GLUT4</text>
        <text x="260" y="151" textAnchor="middle" fontSize="9" fill="#D7BDE2">transporter</text>
        <text x="260" y="165" textAnchor="middle" fontSize="9" fill="#D7BDE2">protein</text>

        {/* Glucose molecules outside */}
        <polygon points={hex(100, 52, 20)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="100" y="56" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>

        <polygon points={hex(400, 55, 20)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="400" y="59" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>

        <polygon points={hex(55, 75, 13)} fill="#E67E22" stroke="#D35400" strokeWidth="1" />
        <polygon points={hex(450, 70, 13)} fill="#E67E22" stroke="#D35400" strokeWidth="1" />

        {/* Arrow downward into channel */}
        <line x1="260" y1="78" x2="260" y2="92" stroke="#E67E22" strokeWidth="2.5" markerEnd="url(#arrowOrange)" />

        {/* Glucose in transit inside GLUT4 */}
        <polygon points={hex(260, 142, 13)} fill="#F39C12" stroke="#E67E22" strokeWidth="1" />

        {/* Arrow out of channel into cytoplasm */}
        <line x1="260" y1="196" x2="260" y2="212" stroke="#E67E22" strokeWidth="2.5" markerEnd="url(#arrowOrange)" />

        {/* Glucose inside cell */}
        <polygon points={hex(170, 248, 20)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="170" y="252" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Glc</text>

        {/* G6P (phosphorylated glucose, trapped) */}
        <polygon points={hex(390, 248, 20)} fill="#A04000" stroke="#784212" strokeWidth="1.5" />
        <text x="390" y="244" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">G6P</text>
        <text x="390" y="256" textAnchor="middle" fontSize="7" fill="#F9E4B7">(trapped!)</text>

        {/* Hexokinase arrow */}
        <line x1="196" y1="248" x2="364" y2="248" stroke="#888" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowGray)" />
        <defs>
            <marker id="arrowGray" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#888" />
            </marker>
        </defs>
        <text x="280" y="240" textAnchor="middle" fontSize="9" fill="#666">Hexokinase (+ATP)</text>

        {/* Insulin receptor (Y shape) */}
        <line x1="470" y1="180" x2="470" y2="162" stroke="#27AE60" strokeWidth="3" />
        <line x1="470" y1="162" x2="456" y2="148" stroke="#27AE60" strokeWidth="3" />
        <line x1="470" y1="162" x2="484" y2="148" stroke="#27AE60" strokeWidth="3" />
        <ellipse cx="454" cy="143" rx="9" ry="6" fill="#2ECC71" />
        <ellipse cx="486" cy="143" rx="9" ry="6" fill="#2ECC71" />
        <text x="470" y="205" textAnchor="middle" fontSize="9" fill="#196F3D" fontWeight="600">Insulin Receptor</text>
        <text x="454" y="133" textAnchor="middle" fontSize="8" fill="#1D8348">Insulin</text>
    </svg>
);

export default function GlucoseUptake() {
    return (
        <TwoColumnSection figure={<GlucoseUptakeSVG />}>
            <Typography variant="h2" component="h2" gutterBottom>
                Step 1 — Glucose Enters the Cell
            </Typography>
            <Typography component="p" gutterBottom>
                Glucose is a polar molecule and cannot pass through the hydrophobic lipid bilayer on its own.
                Instead, cells rely on a family of <strong>GLUT (Glucose Transporter)</strong> proteins — channel
                proteins embedded in the plasma membrane that ferry glucose across.
            </Typography>
            <Typography component="p" gutterBottom>
                Muscle and fat cells primarily use <strong>GLUT4</strong>, which is unique: it only moves
                to the cell surface when <strong>insulin</strong> is present. When you eat a meal and blood
                glucose rises, the pancreas releases insulin. Insulin binds its receptor on the cell surface,
                triggering a signaling cascade that causes GLUT4-containing vesicles to fuse with the membrane —
                dramatically increasing glucose uptake capacity.
            </Typography>
            <Typography component="p" gutterBottom>
                Once inside, glucose is immediately phosphorylated to <strong>glucose-6-phosphate (G6P)</strong>
                by the enzyme <em>hexokinase</em>, which consumes one ATP. This phosphorylation traps glucose
                inside the cell — G6P cannot exit through GLUT transporters — and commits it to
                cellular metabolism.
            </Typography>
        </TwoColumnSection>
    );
}
