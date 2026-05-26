"use client";

import React from 'react';
import { Typography } from '@mui/material';
import PageTitle from '@components/PageTitle';
import PageContainer from '@components/PageContainer';
import Retinopathy from "@app/content/retina/retinopathy";

const TOC = [
    { id: 'retina-anatomy',    label: 'Why the Retina Is Vulnerable' },
    { id: 'fundus-comparison', label: 'What the Eye Doctor Sees' },
    { id: 'mechanism',         label: 'The Molecular Cascade' },
    { id: 'progression',       label: 'Four Stages' },
    { id: 'fung-root-cause',   label: "Dr. Fung's Root-Cause View" },
    { id: 'references',        label: 'References' },
];

export default function Page() {
    return (
        <PageContainer toc={TOC}>
            <PageTitle title="Diabetic Retinopathy: How High Blood Sugar Destroys Vision" />
            <Typography component="p" gutterBottom sx={{ mb: 2 }}>
                The retina translates light into sight — and it is one of the first organs
                destroyed by chronic hyperglycaemia. This page explains the mechanism
                step by step, from pericyte loss and microaneurysms to neovascularisation
                and blindness, through Dr. Jason Fung's root-cause lens.
            </Typography>
            <Retinopathy />
        </PageContainer>
    );
}
