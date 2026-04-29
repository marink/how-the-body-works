import { Typography } from '@mui/material';
import TwoColumnSection from '@components/TwoColumnSection';

// Place nodes evenly around a circle of radius R centered at (cx, cy)
function circlePos(cx, cy, R, index, total, offsetDeg = 0) {
    const angle = (2 * Math.PI * index) / total + (offsetDeg * Math.PI) / 180;
    return [cx + R * Math.cos(angle), cy + R * Math.sin(angle)];
}

const NODES = [
    { label: 'Citrate', carbon: '6C', color: '#2471A3' },
    { label: 'Isocitrate', carbon: '6C', color: '#2471A3' },
    { label: 'α-Ketoglutarate', carbon: '5C', color: '#1F618D' },
    { label: 'Succinyl-CoA', carbon: '4C', color: '#1A5276' },
    { label: 'Succinate', carbon: '4C', color: '#1A5276' },
    { label: 'Fumarate', carbon: '4C', color: '#1A5276' },
    { label: 'Malate', carbon: '4C', color: '#1A5276' },
    { label: 'Oxaloacetate', carbon: '4C', color: '#117A65' },
];

const BYPRODUCTS = [
    null,
    { label: 'CO₂ + NADH', color: '#95A5A6' },
    { label: 'CO₂ + NADH', color: '#95A5A6' },
    { label: 'GTP (=ATP)', color: '#F1C40F' },
    { label: 'FADH₂', color: '#E67E22' },
    null,
    { label: 'NADH', color: '#8E44AD' },
    null,
];

const CX = 210, CY = 200, R = 148, NBOX_W = 82, NBOX_H = 34;

const KrebsCycleSVG = () => {
    const positions = NODES.map((_, i) => circlePos(CX, CY, R, i, NODES.length, -90));

    return (
        <svg viewBox="0 0 420 420" style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block' }}>
            <defs>
                <marker id="kArrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#555" />
                </marker>
            </defs>

            {/* Background */}
            <rect width="420" height="420" fill="#F4F6F7" rx="12" />

            {/* Cycle arrows between nodes */}
            {NODES.map((_, i) => {
                const [x1, y1] = positions[i];
                const [x2, y2] = positions[(i + 1) % NODES.length];
                // Shorten line so arrow doesn't overlap boxes
                const dx = x2 - x1, dy = y2 - y1;
                const len = Math.hypot(dx, dy);
                const trim = 44;
                const sx = x1 + (dx / len) * trim;
                const sy = y1 + (dy / len) * trim;
                const ex = x2 - (dx / len) * trim;
                const ey = y2 - (dy / len) * trim;
                return (
                    <line key={i} x1={sx} y1={sy} x2={ex} y2={ey}
                        stroke="#888" strokeWidth="1.5" markerEnd="url(#kArrow)" />
                );
            })}

            {/* Node boxes */}
            {NODES.map((node, i) => {
                const [x, y] = positions[i];
                return (
                    <g key={i}>
                        <rect x={x - NBOX_W / 2} y={y - NBOX_H / 2} width={NBOX_W} height={NBOX_H}
                            rx="6" fill={node.color} />
                        <text x={x} y={y - 3} textAnchor="middle" fontSize="8.5" fill="white" fontWeight="700">
                            {node.label}
                        </text>
                        <text x={x} y={y + 10} textAnchor="middle" fontSize="8" fill="#D6EAF8">
                            {node.carbon}
                        </text>
                    </g>
                );
            })}

            {/* Byproduct labels — offset outward from each edge midpoint */}
            {BYPRODUCTS.map((bp, i) => {
                if (!bp) return null;
                const [x1, y1] = positions[i];
                const [x2, y2] = positions[(i + 1) % NODES.length];
                const mx = (x1 + x2) / 2;
                const my = (y1 + y2) / 2;
                // Outward direction from circle center
                const dx = mx - CX, dy = my - CY;
                const len = Math.hypot(dx, dy);
                const ox = mx + (dx / len) * 28;
                const oy = my + (dy / len) * 22;
                return (
                    <text key={i} x={ox} y={oy} textAnchor="middle" fontSize="8.5" fill={bp.color} fontWeight="600">
                        {bp.label}
                    </text>
                );
            })}

            {/* Acetyl-CoA entry arrow */}
            <line x1="108" y1="52" x2="148" y2="68" stroke="#1E8449" strokeWidth="2" markerEnd="url(#kArrow)" />
            <text x="68" y="46" fontSize="8.5" fill="#196F3D" fontWeight="700">Acetyl-CoA</text>
            <text x="68" y="58" fontSize="8" fill="#196F3D">(2C) enters</text>

            {/* Center labels */}
            <text x={CX} y={CY - 16} textAnchor="middle" fontSize="13" fill="#1A5276" fontWeight="700">Krebs</text>
            <text x={CX} y={CY + 2}  textAnchor="middle" fontSize="13" fill="#1A5276" fontWeight="700">Cycle</text>
            <text x={CX} y={CY + 18} textAnchor="middle" fontSize="9"  fill="#555">(per turn)</text>

            {/* Summary box */}
            <rect x="8" y="340" width="404" height="70" rx="8" fill="#EBF5FB" stroke="#2471A3" strokeWidth="1.5" />
            <text x="210" y="357" textAnchor="middle" fontSize="10" fill="#1A5276" fontWeight="700">Per Turn (= per Acetyl-CoA = per pyruvate)</text>
            <text x="105" y="374" textAnchor="middle" fontSize="9.5" fill="#8E44AD">3 NADH</text>
            <text x="210" y="374" textAnchor="middle" fontSize="9.5" fill="#E67E22">1 FADH₂</text>
            <text x="315" y="374" textAnchor="middle" fontSize="9.5" fill="#F1C40F">1 GTP (≈ ATP)</text>
            <text x="210" y="392" textAnchor="middle" fontSize="9.5" fill="#7F8C8D">2 CO₂ released · Cycle turns twice per glucose</text>
        </svg>
    );
};

export default function KrebsCycle() {
    return (
        <TwoColumnSection figure={<KrebsCycleSVG />} reversed>
            <Typography variant="h2" component="h2" gutterBottom>
                Step 4 — The Krebs Cycle (Citric Acid Cycle)
            </Typography>
            <Typography component="p" gutterBottom>
                Acetyl-CoA (2C) enters the Krebs cycle by combining with <strong>oxaloacetate (4C)</strong>
                to form <strong>citrate (6C)</strong>. Over 8 tightly regulated reactions, the two carbons
                introduced by Acetyl-CoA are progressively oxidized and released as CO₂ — which is why
                the CO₂ you exhale is literally the carbon from your food.
            </Typography>
            <Typography component="p" gutterBottom>
                The primary job of the Krebs cycle is <strong>not</strong> direct ATP production — it's
                to harvest electrons in the form of high-energy carrier molecules. Per turn of the cycle:
            </Typography>
            <Typography component="ul" sx={{ pl: 2 }} gutterBottom>
                <li><strong>3 NADH</strong> — feed electrons into Complex I of the ETC</li>
                <li><strong>1 FADH₂</strong> — feeds electrons into Complex II</li>
                <li><strong>1 GTP</strong> (≈ 1 ATP) — direct energy yield</li>
                <li><strong>2 CO₂</strong> — exhaled as waste</li>
            </Typography>
            <Typography component="p" gutterBottom>
                Because each glucose produces 2 Acetyl-CoA, the cycle turns <strong>twice per glucose</strong>,
                yielding 6 NADH, 2 FADH₂, 2 GTP, and 4 CO₂ from this stage alone.
            </Typography>
            <Typography component="p">
                Critically, oxaloacetate is regenerated at the end of each turn, making the cycle
                truly catalytic. Many cycle enzymes are feedback-inhibited by the very products they generate —
                NADH, ATP — so the cell tightly throttles energy production to match demand.
            </Typography>
        </TwoColumnSection>
    );
}
