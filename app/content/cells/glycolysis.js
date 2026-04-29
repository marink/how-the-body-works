import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TwoColumnSection from '@components/TwoColumnSection';

function hex(cx, cy, r) {
    const pts = [
        [cx,             cy - r],
        [cx + r * 0.866, cy - r * 0.5],
        [cx + r * 0.866, cy + r * 0.5],
        [cx,             cy + r],
        [cx - r * 0.866, cy + r * 0.5],
        [cx - r * 0.866, cy - r * 0.5],
    ];
    return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
}

const GlycolysisSVG = () => (
    <svg viewBox="0 0 260 420" style={{ width: '100%', maxWidth: 260, height: 'auto', display: 'block' }}>
        <defs>
            <marker id="arrDown" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
                <path d="M1,0 L7,0 L4,7 Z" fill="#555" />
            </marker>
            <marker id="arrDownOrange" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
                <path d="M1,0 L7,0 L4,7 Z" fill="#D35400" />
            </marker>
        </defs>

        {/* Cytoplasm background */}
        <rect x="0" y="0" width="260" height="420" fill="#FEFDE7" rx="8" />
        <text x="130" y="16" textAnchor="middle" fontSize="10" fill="#7D6608" fontWeight="600">CYTOPLASM</text>

        {/* --- Glucose --- */}
        <polygon points={hex(130, 48, 24)} fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
        <text x="130" y="52" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Glucose (6C)</text>

        {/* Phase label: Energy Investment */}
        <rect x="4" y="78" width="252" height="20" rx="4" fill="#FADBD8" />
        <text x="130" y="92" textAnchor="middle" fontSize="9" fill="#922B21" fontWeight="600">⬇ Energy Investment Phase (uses 2 ATP)</text>

        {/* Step arrow */}
        <line x1="130" y1="72" x2="130" y2="80" stroke="#555" strokeWidth="2" />
        <text x="170" y="76" fontSize="8" fill="#555" fontStyle="italic">−2 ATP</text>

        {/* F1,6-BP */}
        <polygon points={hex(130, 115, 24)} fill="#E59866" stroke="#CA6F1E" strokeWidth="1.5" />
        <text x="130" y="111" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">F-1,6-BP</text>
        <text x="130" y="122" textAnchor="middle" fontSize="8" fill="white">(6C)</text>

        {/* Split arrow */}
        <line x1="130" y1="139" x2="130" y2="160" stroke="#555" strokeWidth="2" markerEnd="url(#arrDown)" />
        <text x="148" y="154" fontSize="8" fill="#555" fontStyle="italic">Aldolase</text>
        <text x="130" y="157" textAnchor="middle" fontSize="9" fill="#555">↙ split ↘</text>

        {/* Two G3P */}
        <polygon points={hex(75, 190, 20)} fill="#E59866" stroke="#CA6F1E" strokeWidth="1.5" />
        <text x="75" y="188" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">G3P</text>
        <text x="75" y="199" textAnchor="middle" fontSize="7" fill="white">(3C)</text>

        <polygon points={hex(185, 190, 20)} fill="#E59866" stroke="#CA6F1E" strokeWidth="1.5" />
        <text x="185" y="188" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">G3P</text>
        <text x="185" y="199" textAnchor="middle" fontSize="7" fill="white">(3C)</text>

        {/* Phase label: Payoff */}
        <rect x="4" y="216" width="252" height="20" rx="4" fill="#D5F5E3" />
        <text x="130" y="230" textAnchor="middle" fontSize="9" fill="#196F3D" fontWeight="600">⬇ Energy Payoff Phase (yields 4 ATP, 2 NADH)</text>

        {/* Arrows from G3P down */}
        <line x1="75" y1="210" x2="75" y2="240" stroke="#D35400" strokeWidth="2" markerEnd="url(#arrDownOrange)" />
        <line x1="185" y1="210" x2="185" y2="240" stroke="#D35400" strokeWidth="2" markerEnd="url(#arrDownOrange)" />
        <text x="22" y="228" fontSize="8" fill="#555">+2 ATP</text>
        <text x="22" y="238" fontSize="8" fill="#7D3C98">+1 NADH</text>
        <text x="192" y="228" fontSize="8" fill="#555">+2 ATP</text>
        <text x="192" y="238" fontSize="8" fill="#7D3C98">+1 NADH</text>

        {/* Two Pyruvate */}
        <polygon points={hex(75, 270, 20)} fill="#D35400" stroke="#922B21" strokeWidth="1.5" />
        <text x="75" y="267" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Pyruvate</text>
        <text x="75" y="278" textAnchor="middle" fontSize="7" fill="white">(3C)</text>

        <polygon points={hex(185, 270, 20)} fill="#D35400" stroke="#922B21" strokeWidth="1.5" />
        <text x="185" y="267" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Pyruvate</text>
        <text x="185" y="278" textAnchor="middle" fontSize="7" fill="white">(3C)</text>

        {/* Arrow to mitochondria */}
        <line x1="75"  y1="290" x2="75"  y2="310" stroke="#555" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="185" y1="290" x2="185" y2="310" stroke="#555" strokeWidth="1.5" strokeDasharray="4,3" />
        <text x="130" y="320" textAnchor="middle" fontSize="9" fill="#666">→ Mitochondria</text>

        {/* Net result box */}
        <rect x="12" y="330" width="236" height="78" rx="8" fill="#EBF5FB" stroke="#2471A3" strokeWidth="1.5" />
        <text x="130" y="348" textAnchor="middle" fontSize="10" fill="#1A5276" fontWeight="700">Net per Glucose</text>
        <text x="130" y="365" textAnchor="middle" fontSize="10" fill="#27AE60">+2 ATP</text>
        <text x="130" y="381" textAnchor="middle" fontSize="10" fill="#7D3C98">+2 NADH</text>
        <text x="130" y="397" textAnchor="middle" fontSize="10" fill="#D35400">+2 Pyruvate (3C each)</text>
    </svg>
);

export default function Glycolysis() {
    return (
        <TwoColumnSection figure={<GlycolysisSVG />} reversed>
            <Typography variant="h2" component="h2" gutterBottom>
                Step 2 — Glycolysis: Splitting Glucose in the Cytoplasm
            </Typography>
            <Typography component="p" gutterBottom>
                Glycolysis ("glucose splitting") is the ancient, oxygen-independent pathway that all cells use
                to extract a small but immediate payoff from glucose. It takes place entirely in the
                <strong> cytoplasm</strong> and proceeds through 10 enzyme-catalyzed reactions in two phases.
            </Typography>
            <Typography component="p" gutterBottom>
                <strong>Energy Investment Phase (steps 1–5):</strong> The cell spends 2 ATP to
                phosphorylate and destabilize glucose, ultimately splitting the 6-carbon sugar
                into two 3-carbon molecules called <em>glyceraldehyde-3-phosphate (G3P)</em>.
            </Typography>
            <Typography component="p" gutterBottom>
                <strong>Energy Payoff Phase (steps 6–10):</strong> Each G3P is oxidized to pyruvate,
                generating 2 ATP and 1 NADH. Since there are two G3Ps per glucose, the payoff
                is 4 ATP and 2 NADH total — for a <strong>net gain of 2 ATP and 2 NADH</strong> per glucose.
            </Typography>
            <Typography component="p" gutterBottom>
                The 2 NADH are electron carriers; they will donate their electrons to the Electron Transport
                Chain later, yielding about 5 more ATP each. Under oxygen-starved conditions (sprinting,
                for instance), cells convert pyruvate to lactate to regenerate NAD+ and keep glycolysis running —
                this is the source of muscle burn.
            </Typography>
        </TwoColumnSection>
    );
}
