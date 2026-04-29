import { Typography } from '@mui/material';
import TwoColumnSection from '@components/TwoColumnSection';

const PyruvateAcetylSVG = () => (
    <svg viewBox="0 0 520 310" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="arrBlack" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#333" />
            </marker>
            <marker id="arrGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#1E8449" />
            </marker>
            <marker id="arrUp" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto">
                <path d="M0,8 L4,0 L8,8 Z" fill="#95A5A6" />
            </marker>
        </defs>

        {/* Cytoplasm background */}
        <rect x="0" y="0" width="520" height="310" fill="#FEFDE7" rx="8" />
        <text x="12" y="18" fontSize="10" fill="#7D6608" fontWeight="600">CYTOPLASM</text>

        {/* Mitochondria outer membrane */}
        <ellipse cx="320" cy="165" rx="190" ry="130" fill="#D5F5E3" stroke="#1E8449" strokeWidth="2" />
        <text x="320" y="20" textAnchor="middle" fontSize="10" fill="#1A5276" fontWeight="600">MITOCHONDRION</text>

        {/* Mitochondria inner membrane (matrix) */}
        <ellipse cx="330" cy="172" rx="148" ry="100" fill="#A9DFBF" stroke="#196F3D" strokeWidth="1.5" />

        {/* Cristae (inner membrane folds, simplified) */}
        <path d="M 200 155 Q 220 130 200 105" fill="none" stroke="#196F3D" strokeWidth="1.5" />
        <path d="M 240 175 Q 255 148 240 120" fill="none" stroke="#196F3D" strokeWidth="1.5" />
        <path d="M 450 155 Q 432 130 450 105" fill="none" stroke="#196F3D" strokeWidth="1.5" />

        {/* Matrix label */}
        <text x="330" y="290" textAnchor="middle" fontSize="9" fill="#196F3D" fontWeight="600">Mitochondrial Matrix</text>

        {/* Pyruvate (left, outside mitochondria) */}
        <polygon points="55,130 85,115 85,145" fill="#D35400" stroke="#922B21" strokeWidth="1.5" />
        <text x="55" y="158" textAnchor="start" fontSize="9" fill="#922B21" fontWeight="700">Pyruvate (3C)</text>

        {/* Arrow into mitochondria through membranes */}
        <line x1="90" y1="130" x2="155" y2="145" stroke="#333" strokeWidth="2" markerEnd="url(#arrBlack)" />
        <text x="108" y="128" fontSize="8" fill="#555" fontStyle="italic">carrier protein</text>

        {/* PDC complex box */}
        <rect x="182" y="145" width="140" height="52" rx="8" fill="#7D3C98" />
        <text x="252" y="165" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Pyruvate</text>
        <text x="252" y="178" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Dehydrogenase</text>
        <text x="252" y="191" textAnchor="middle" fontSize="9" fill="#D7BDE2">Complex (PDC)</text>

        {/* Acetyl-CoA out (right arrow) */}
        <line x1="325" y1="171" x2="400" y2="171" stroke="#1E8449" strokeWidth="2.5" markerEnd="url(#arrGreen)" />
        <text x="362" y="164" textAnchor="middle" fontSize="8" fill="#196F3D" fontWeight="600">Acetyl-CoA (2C)</text>
        <text x="362" y="185" textAnchor="middle" fontSize="8" fill="#555">+ CoA released</text>

        {/* CO2 bubble (up from PDC) */}
        <line x1="252" y1="145" x2="252" y2="105" stroke="#95A5A6" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrUp)" />
        <ellipse cx="252" cy="92" rx="28" ry="16" fill="#ECF0F1" stroke="#95A5A6" strokeWidth="1.5" />
        <text x="252" y="97" textAnchor="middle" fontSize="9" fill="#7F8C8D" fontWeight="700">CO₂</text>

        {/* NADH out (left side up) */}
        <line x1="198" y1="145" x2="175" y2="100" stroke="#8E44AD" strokeWidth="1.5" markerEnd="url(#arrUp)" />
        <rect x="142" y="76" width="52" height="22" rx="6" fill="#9B59B6" />
        <text x="168" y="91" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">NADH</text>

        {/* Per pyruvate tally */}
        <rect x="390" y="115" width="120" height="90" rx="8" fill="#EBF5FB" stroke="#2471A3" strokeWidth="1.5" />
        <text x="450" y="133" textAnchor="middle" fontSize="10" fill="#1A5276" fontWeight="700">Per Pyruvate</text>
        <text x="450" y="150" textAnchor="middle" fontSize="9" fill="#7F8C8D">1 CO₂ released</text>
        <text x="450" y="165" textAnchor="middle" fontSize="9" fill="#9B59B6">1 NADH produced</text>
        <text x="450" y="180" textAnchor="middle" fontSize="9" fill="#1E8449">1 Acetyl-CoA</text>
        <text x="450" y="197" textAnchor="middle" fontSize="8" fill="#555">× 2 per glucose</text>

        {/* Pyruvate arrow entering PDC */}
        <line x1="160" y1="152" x2="180" y2="163" stroke="#333" strokeWidth="2" markerEnd="url(#arrBlack)" />
    </svg>
);

export default function PyruvateAcetyl() {
    return (
        <TwoColumnSection figure={<PyruvateAcetylSVG />}>
            <Typography variant="h2" component="h2" gutterBottom>
                Step 3 — Pyruvate Enters the Mitochondria
            </Typography>
            <Typography component="p" gutterBottom>
                The two pyruvate molecules produced by glycolysis must cross into the mitochondria —
                the cell's power plant — to be fully oxidized. Pyruvate crosses the outer mitochondrial
                membrane easily, but requires a dedicated <strong>mitochondrial pyruvate carrier (MPC)</strong>
                protein to cross the inner membrane.
            </Typography>
            <Typography component="p" gutterBottom>
                Inside the matrix, the massive <strong>Pyruvate Dehydrogenase Complex (PDC)</strong> —
                a cluster of three distinct enzymes — performs a pivotal transformation called
                <em> oxidative decarboxylation</em>: one carbon is stripped off as CO₂, and
                the remaining 2-carbon fragment is attached to <strong>Coenzyme A (CoA)</strong>,
                forming <strong>Acetyl-CoA</strong>.
            </Typography>
            <Typography component="p" gutterBottom>
                Each pyruvate → Acetyl-CoA conversion yields:
            </Typography>
            <Typography component="ul" sx={{ pl: 2 }} gutterBottom>
                <li>1 molecule of CO₂ (exhaled as waste)</li>
                <li>1 NADH (electron carrier for the ETC)</li>
                <li>1 Acetyl-CoA (the universal fuel that feeds the Krebs cycle)</li>
            </Typography>
            <Typography component="p">
                Since each glucose makes 2 pyruvates, this step produces 2 Acetyl-CoA,
                2 CO₂, and 2 NADH before the Krebs cycle even begins.
            </Typography>
        </TwoColumnSection>
    );
}
