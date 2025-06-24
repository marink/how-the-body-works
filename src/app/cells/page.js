import React from 'react';

import PageContainer from '@components/PageContainer';
import PageTitle from '@components/PageTitle';
import { Typography } from '@mui/material';


export default function CellsPage() {
    return (
        <PageContainer>
            <PageTitle title="Cells: The Building Blocks of Life" />
            <Typography component="p">
                Cells are the basic unit of life. They are the smallest structural and functional units of an organism.
                All living things are made up of cells, which can be classified into two main types: prokaryotic and eukaryotic cells.
            </Typography>

            <Typography component="h1" variant="h1" gutterBottom>Prokaryotic Cells</Typography>
            <Typography component="p">
                Prokaryotic cells are simple and do not have a nucleus or other membrane-bound organelles. They are typically smaller than eukaryotic cells and are found in single-celled organisms like bacteria.
            </Typography>

            <Typography component="h1" variant="h1" gutterBottom>Eukaryotic Cells</Typography>
            <Typography component="p">
                Eukaryotic cells are more complex and have a nucleus and other membrane-bound organelles. They can be single-celled or multicellular organisms, including plants, animals, and fungi.
            </Typography>

            <Typography component="h1" variant="h1" gutterBottom>Human Cells</Typography>
            <Typography component="p">
                Human cells are eukaryotic cells that make up the tissues and organs of the human body. They are characterized by 
                their complex structure, which includes a nucleus, organelles, and a plasma membrane. 
                Human cells can be classified into several types, including muscle cells, nerve cells, and epithelial cells.
            </Typography>

            <Typography component="h2" variant="h2"gutterBottom>Muscle Cells</Typography>
            <Typography component="p" gutterBottom>
                Muscle cells, or myocytes, are specialized cells that make up muscle tissue. They are responsible for producing 
                force and enabling movement in the body. Muscle cells can be classified into three types: skeletal, cardiac, 
                and smooth muscle cells.
            </Typography>

            <Typography component="h2" variant="h2"gutterBottom>Nerve Cells</Typography>
            <Typography component="p">
                Nerve cells, or neurons, are specialized cells that transmit electrical signals throughout the body. They are responsible for 
                processing and transmitting information in the nervous system. Neurons have a unique structure, including dendrites, axons, and synapses, which allow them to communicate with each other and other cells.
            </Typography>

            <Typography component="h2" variant="h2"gutterBottom>Epithelial Cells</Typography>
            <Typography component="p">
                Epithelial cells are specialized cells that form the lining of organs and structures in the body. They serve as a protective barrier and are involved in absorption, secretion, and sensation.
                Epithelial cells can be classified into several types, including squamous, cuboidal, and columnar epithelial cells, based on their shape and arrangement.
            </Typography>   

            <Typography component="h1" variant="h1"  gutterBottom>Stem Cells</Typography>
            <Typography component="p">
                Stem cells are unique cells that have the ability to develop into different cell types in the body. They are classified into two main types: embryonic stem cells and adult stem cells. 
                Embryonic stem cells are derived from early-stage embryos and can differentiate into any cell type, while adult stem cells are found in various tissues and have a more limited differentiation potential.
            </Typography>

            <Typography component="h1" variant="h1"  gutterBottom>Adipose Tissue</Typography>
            <Typography component="p">
                Adipose tissue, or body fat, is a type of connective tissue that stores energy in the form of fat. It provides insulation and cushioning for the body and plays a crucial role in regulating metabolism.
            </Typography>
        </PageContainer>
    );
}
