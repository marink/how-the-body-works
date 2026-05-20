import React from 'react';

import PageContainer from '@components/PageContainer';
import PageTitle from '@components/PageTitle';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Ref from '@components/Ref';
import References from '@components/References';
import { REFS } from '@app/content/references';

import GlucoseUptake  from '@app/content/cells/glucose-uptake';
import Glycolysis     from '@app/content/cells/glycolysis';
import PyruvateAcetyl from '@app/content/cells/pyruvate-acetyl';
import KrebsCycle     from '@app/content/cells/krebs-cycle';
import ETCandATP      from '@app/content/cells/etc-atp';
import DNARNAProtein  from '@app/content/cells/dna-rna-protein';
import Section from '@components/Section';

const PAGE_REFS = [
    { n: 1, ...REFS.glut4Transporter },
    { n: 2, ...REFS.atpEnergyCurrency },
    { n: 3, ...REFS.glucosePhysiology },
];

const TOC = [
    { id: 'prokaryotic',    label: 'Prokaryotic Cells' },
    { id: 'eukaryotic',     label: 'Eukaryotic Cells' },
    { id: 'human-cells',    label: 'Human Cells' },
    { id: 'muscle',         label: 'Muscle Cells',         level: 2 },
    { id: 'nerve',          label: 'Nerve Cells',          level: 2 },
    { id: 'epithelial',     label: 'Epithelial Cells',     level: 2 },
    { id: 'stem-cells',     label: 'Stem Cells' },
    { id: 'adipose',        label: 'Adipose Tissue' },
    { id: 'energy',         label: 'Energy & Metabolism' },
    { id: 'glucose-uptake', label: 'Glucose Uptake',       level: 2 },
    { id: 'glycolysis',     label: 'Glycolysis',           level: 2 },
    { id: 'pyruvate',       label: 'Pyruvate → Acetyl-CoA',level: 2 },
    { id: 'krebs',          label: 'Krebs Cycle',          level: 2 },
    { id: 'etc-atp',        label: 'ETC & ATP Synthesis',  level: 2 },
    { id: 'dna-rna',        label: 'DNA, RNA & Proteins',  level: 2 },
    { id: 'references',     label: 'References' },
];

export default function CellsPage() {
    return (
        <PageContainer toc={TOC}>
            <PageTitle title="Cells: The Building Blocks of Life" />

            <Typography component="p" gutterBottom>
                Cells are the basic unit of life — the smallest structural and functional units of
                any organism. All living things are made up of cells, which fall into two broad
                categories: <strong>prokaryotic</strong> (no nucleus, e.g. bacteria) and
                <strong> eukaryotic</strong> (nucleus-bearing, e.g. all plant, animal, and fungal cells).
            </Typography>

            <Section>
                <Typography id="prokaryotic" component="h1" variant="h1" gutterBottom sx={{ mt: 3.5 }}>Prokaryotic Cells</Typography>
                <Typography component="p" gutterBottom>
                    Prokaryotic cells are simple and do not have a nucleus or other membrane-bound organelles.
                    They are typically smaller than eukaryotic cells and are found in single-celled organisms
                    like bacteria.
                </Typography>
            </Section>

            <Section alt>
                <Typography id="eukaryotic" component="h1" variant="h1" gutterBottom sx={{ mt: 3.5 }}>Eukaryotic Cells</Typography>
                <Typography component="p" gutterBottom>
                    Eukaryotic cells are more complex and have a nucleus and other membrane-bound organelles.
                    They can be single-celled or multicellular organisms, including plants, animals, and fungi.
                </Typography>
            </Section>

            <Section>
                <Typography id="human-cells" component="h1" variant="h1" gutterBottom sx={{ mt: 3.5 }}>Human Cells</Typography>
                <Typography component="p" gutterBottom>
                    Human cells are eukaryotic cells that make up the tissues and organs of the human body.
                    They are characterized by their complex structure — nucleus, specialized organelles,
                    and a plasma membrane — and can be classified into several types:
                </Typography>

                <Typography id="muscle" component="h2" variant="h2" gutterBottom sx={{ mt: 2 }}>Muscle Cells</Typography>
                <Typography component="p" gutterBottom>
                    Muscle cells, or myocytes, are specialized cells that make up muscle tissue. They are
                    responsible for producing force and enabling movement. Muscle cells are classified into
                    three types: skeletal, cardiac, and smooth muscle cells.
                </Typography>

                <Typography id="nerve" component="h2" variant="h2" gutterBottom sx={{ mt: 2 }}>Nerve Cells</Typography>
                <Typography component="p" gutterBottom>
                    Nerve cells, or neurons, are specialized cells that transmit electrical signals throughout
                    the body. They have a unique structure — dendrites, axons, and synapses — allowing them
                    to communicate with each other and with other cell types.
                </Typography>

                <Typography id="epithelial" component="h2" variant="h2" gutterBottom sx={{ mt: 2 }}>Epithelial Cells</Typography>
                <Typography component="p" gutterBottom>
                    Epithelial cells form the lining of organs and body structures. They serve as a protective
                    barrier and are involved in absorption, secretion, and sensation. They are classified by
                    shape: squamous, cuboidal, and columnar.
                </Typography>
            </Section>

            <Section alt>
                <Typography id="stem-cells" component="h1" variant="h1" gutterBottom sx={{ mt: 3.5 }}>Stem Cells</Typography>
                <Typography component="p" gutterBottom>
                    Stem cells have the ability to develop into different cell types. Embryonic stem cells
                    can differentiate into any cell type; adult stem cells are tissue-specific with a more
                    limited range.
                </Typography>
            </Section>

            <Section>
                <Typography id="adipose" component="h1" variant="h1" gutterBottom sx={{ mt: 3.5 }}>Adipose Tissue</Typography>
                <Typography component="p" gutterBottom>
                    Adipose tissue, or body fat, is a type of connective tissue that stores energy as fat,
                    provides insulation, and plays a central role in regulating metabolism and hormone signaling.
                </Typography>
            </Section>

            {/* ── Transition into energy metabolism ── */}
            <Divider sx={{ my: 5 }} />

            <Box sx={{ mb: 5 }}>
                <Typography id="energy" component="h1" variant="h1" gutterBottom>
                    Energy &amp; Metabolism: Inside the Human Cell
                </Typography>
                <Typography component="p" gutterBottom>
                    Every cell type above — whether it is a muscle cell contracting, a neuron firing an
                    impulse, or an epithelial cell repairing a wound — runs on the same universal
                    energy currency: <strong>ATP (adenosine triphosphate)</strong><Ref n={2} />. To stay alive, human
                    cells must continuously regenerate ATP from the food we eat.
                </Typography>
                <Typography component="p">
                    The primary fuel is <strong>glucose</strong>, a simple sugar delivered to every cell
                    by the bloodstream. Below we trace the complete journey of one glucose molecule —
                    from crossing the cell membrane all the way to the ~30 ATP molecules it ultimately
                    generates<Ref n={3} /> — and show how DNA and RNA direct the molecular machinery that makes it
                    all possible.
                </Typography>
            </Box>

            <GlucoseUptake />
            <Glycolysis />
            <PyruvateAcetyl />
            <KrebsCycle />
            <ETCandATP />
            <DNARNAProtein />

            <References items={PAGE_REFS} />
        </PageContainer>
    );
}
