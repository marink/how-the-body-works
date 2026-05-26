"use client";

import React from 'react';
import { Typography } from '@mui/material';

import PageTitle from '@components/PageTitle';
import PageContainer from '@components/PageContainer';

import Hyperglycemia from "@app/content/glucose/hyperglycemia";

const TOC = [
    { id: 'oxidative-stress',   label: 'Oxidative Stress' },
    { id: 'ages',               label: 'Advanced Glycation End Products' },
    { id: 'mitochondria',       label: 'Mitochondrial Overload' },
    { id: 'insulin-resistance', label: 'Insulin Resistance' },
    { id: 'fung-two-phase',     label: 'Two-Phase Model (Dr. Fung)' },
    { id: 'apoptosis',          label: 'Apoptosis' },
    { id: 'analogy',            label: 'Why "Fried"?' },
    { id: 'references',         label: 'References' },
];

export default function Page() {
    return (
        <PageContainer toc={TOC}>
            <PageTitle title="Hyperglycemia: How High Blood Sugar Damages Cells" />
            <Typography component="p" gutterBottom sx={{ mb: 2 }}>
                Chronically elevated blood glucose triggers a cascade of molecular injuries —
                oxidative stress, protein glycation, mitochondrial overload, and ultimately
                organ failure. This page traces that damage step by step, including
                Dr. Jason Fung's two-phase model of how sugar causes Type 2 Diabetes.
            </Typography>
            <Hyperglycemia />
        </PageContainer>
    );
}
