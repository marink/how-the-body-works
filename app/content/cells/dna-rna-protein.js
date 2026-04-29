import { Typography } from '@mui/material';
import TwoColumnSection from '@components/TwoColumnSection';

const CentralDogmaSVG = () => (
    <svg viewBox="0 0 520 310" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}>
        <defs>
            <marker id="cdArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#555" />
            </marker>
        </defs>

        {/* Background */}
        <rect width="520" height="310" fill="#F4F6F7" rx="8" />

        {/* ── NUCLEUS panel ── */}
        <ellipse cx="100" cy="145" rx="90" ry="110" fill="#EAF2FF" stroke="#2471A3" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fontSize="10" fill="#1A5276" fontWeight="700">NUCLEUS</text>

        {/* DNA double helix (simplified ladder) */}
        {[0,1,2,3,4,5,6,7,8].map(i => {
            const y = 55 + i * 19;
            const offset = i % 2 === 0 ? 0 : 6;
            return (
                <g key={i}>
                    {/* Left strand */}
                    <path d={`M ${68 + offset} ${y} Q 80 ${y + 9} ${68 + offset} ${y + 19}`}
                        fill="none" stroke="#2980B9" strokeWidth="2" />
                    {/* Right strand */}
                    <path d={`M ${132 - offset} ${y} Q 120 ${y + 9} ${132 - offset} ${y + 19}`}
                        fill="none" stroke="#C0392B" strokeWidth="2" />
                    {/* Rung */}
                    {i < 8 && <line x1={68 + offset} y1={y + 9} x2={132 - offset} y2={y + 9}
                        stroke="#7F8C8D" strokeWidth="1.5" strokeDasharray="3,2" />}
                </g>
            );
        })}

        <text x="100" y="240" textAnchor="middle" fontSize="9" fill="#1A5276" fontWeight="600">DNA (gene)</text>

        {/* RNA Polymerase */}
        <ellipse cx="148" cy="120" rx="20" ry="14" fill="#8E44AD" />
        <text x="148" y="124" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">RNA Pol</text>

        {/* Transcription arrow & label */}
        <line x1="198" y1="145" x2="248" y2="145" stroke="#555" strokeWidth="2" markerEnd="url(#cdArrow)" />
        <text x="223" y="136" textAnchor="middle" fontSize="9" fill="#555" fontWeight="600">Transcription</text>
        <text x="223" y="160" textAnchor="middle" fontSize="8" fill="#888">(nucleus)</text>

        {/* Nuclear pore */}
        <rect x="186" y="133" width="20" height="24" rx="4" fill="#BDC3C7" stroke="#7F8C8D" strokeWidth="1" />
        <text x="196" y="148" textAnchor="middle" fontSize="7" fill="#555">pore</text>

        {/* ── mRNA strand ── */}
        <rect x="250" y="95" width="8" height="100" rx="4" fill="#16A085" />
        {['AUG','GCU','UCA','CCG','UAU'].map((codon, i) => (
            <g key={i}>
                <rect x="258" y={100 + i * 18} width="34" height="14" rx="3" fill="#1ABC9C" />
                <text x="275" y={111 + i * 18} textAnchor="middle" fontSize="7.5" fill="white" fontWeight="600">{codon}</text>
            </g>
        ))}
        <text x="275" y="210" textAnchor="middle" fontSize="9" fill="#117A65" fontWeight="600">mRNA</text>
        <text x="275" y="222" textAnchor="middle" fontSize="8" fill="#117A65">(codons)</text>

        {/* Translation arrow & label */}
        <line x1="302" y1="145" x2="345" y2="145" stroke="#555" strokeWidth="2" markerEnd="url(#cdArrow)" />
        <text x="323" y="136" textAnchor="middle" fontSize="9" fill="#555" fontWeight="600">Translation</text>
        <text x="323" y="160" textAnchor="middle" fontSize="8" fill="#888">(ribosome)</text>

        {/* ── Ribosome ── */}
        <ellipse cx="385" cy="125" rx="38" ry="22" fill="#7F8C8D" />
        <ellipse cx="385" cy="152" rx="48" ry="26" fill="#95A5A6" />
        <text x="385" y="143" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Ribosome</text>
        {/* mRNA thread through */}
        <line x1="338" y1="155" x2="434" y2="155" stroke="#1ABC9C" strokeWidth="3" />

        {/* tRNA entering */}
        <path d="M 400 108 L 393 118" stroke="#E67E22" strokeWidth="2" />
        <ellipse cx="405" cy="100" rx="14" ry="10" fill="#F39C12" />
        <text x="405" y="104" textAnchor="middle" fontSize="7" fill="white">tRNA</text>

        {/* Growing polypeptide chain (colored beads) */}
        {['#E74C3C','#E67E22','#F1C40F','#27AE60','#2471A3','#8E44AD'].map((col, i) => (
            <circle key={i} cx={380 - i * 14} cy={185} r={9} fill={col} stroke="white" strokeWidth="1.5" />
        ))}
        <path d="M 298 185 Q 330 170 352 185" fill="none" stroke="#BDC3C7" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x="370" y="205" textAnchor="middle" fontSize="9" fill="#555" fontWeight="600">Polypeptide chain</text>
        <text x="370" y="217" textAnchor="middle" fontSize="8.5" fill="#7D3C98">(folds → enzyme)</text>

        {/* Example label */}
        <rect x="260" y="240" width="252" height="62" rx="8" fill="#FDEEF4" stroke="#C0392B" strokeWidth="1.5" />
        <text x="386" y="256" textAnchor="middle" fontSize="8.5" fill="#922B21" fontWeight="700">Example</text>
        <text x="386" y="270" textAnchor="middle" fontSize="8" fill="#555">Gene → mRNA → Hexokinase</text>
        <text x="386" y="282" textAnchor="middle" fontSize="8" fill="#555">enzyme that traps glucose</text>
        <text x="386" y="294" textAnchor="middle" fontSize="8" fill="#555">as G6P (Step 1 of glycolysis)</text>
    </svg>
);

export default function DNARNAProtein() {
    return (
        <TwoColumnSection figure={<CentralDogmaSVG />} reversed>
            <Typography variant="h2" component="h2" gutterBottom>
                The Blueprint: DNA, RNA & the Enzymes of Energy
            </Typography>
            <Typography component="p" gutterBottom>
                Every enzyme that catalyzes glycolysis, the Krebs cycle, and the Electron Transport
                Chain is a protein. And every protein is ultimately encoded in <strong>DNA</strong> —
                the cell's master blueprint stored in the nucleus.
            </Typography>
            <Typography component="p" gutterBottom>
                The <strong>Central Dogma of molecular biology</strong> describes the flow of
                genetic information: <em>DNA → RNA → Protein</em>.
            </Typography>
            <Typography component="p" gutterBottom>
                <strong>Transcription (in the nucleus):</strong> RNA polymerase reads a gene's
                DNA sequence and synthesizes a complementary <strong>messenger RNA (mRNA)</strong>
                strand. The mRNA carries the recipe for one protein. It exits the nucleus
                through nuclear pores into the cytoplasm.
            </Typography>
            <Typography component="p" gutterBottom>
                <strong>Translation (at the ribosome):</strong> The ribosome reads the mRNA
                three bases at a time (each triplet is a <em>codon</em>). For each codon,
                a transfer RNA (tRNA) delivers the matching amino acid. The growing chain of
                amino acids folds into its 3D shape, becoming a functional enzyme.
            </Typography>
            <Typography component="p" gutterBottom>
                For example: the gene for <em>hexokinase</em> is transcribed → translated
                into the hexokinase protein → which phosphorylates glucose the moment it enters
                the cell, committing it to glycolysis. Mutations in any of these genes can
                break the energy production chain and cause <strong>mitochondrial diseases</strong>.
            </Typography>
            <Typography component="p">
                Notably, mitochondria retain their own small circular DNA — a relic of their
                ancient bacterial ancestry — and use it to encode <strong>13 proteins</strong>,
                all of which are subunits of the ETC and ATP Synthase.
            </Typography>
        </TwoColumnSection>
    );
}
