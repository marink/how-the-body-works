"use client";

import React from 'react';

import Conversion from '@app/content/glucose/conversion';
import Timeline from '@app/content/glucose/timeline';
import InsulinResistance from '@app/content/insulin/resistance';
import KetosisVsInsulinResistance from '@app/content/insulin/ketosis';

import ContentPage from '@components/PageContainer';
import PageTitle from '@components/PageTitle';
import PageContent from '@components/PageContent';
import Section from '@components/Section';
import { Typography } from '@mui/material';
import References from '@components/References';
import { REFS } from '@app/content/references';

const PAGE_REFS = [
    { n: 1,  ...REFS.salivaryAmylase },
    { n: 2,  ...REFS.pancreaticAmylase },
    { n: 3,  ...REFS.glucoseAbsorption },
    { n: 4,  ...REFS.bloodGlucosePeak },
    { n: 5,  ...REFS.glucosePhysiology },
    { n: 6,  ...REFS.refinedCarbsGlycemia },
    { n: 7,  ...REFS.insulinResistance },
    { n: 8,  ...REFS.insulinResistanceDiabetes },
    { n: 9,  ...REFS.ketogenicDiet },
    { n: 10, ...REFS.lowCarbInsulinSensitivity },
];

const TOC = [
    { id: 'carb-digestion',    label: 'Carbohydrate Digestion' },
    { id: 'timeline',          label: 'Timeline: Food to Glucose' },
    { id: 'insulin-resistance',label: 'Insulin Resistance' },
    { id: 'ketosis',           label: 'Ketosis vs. Insulin Resistance' },
    { id: 'references',        label: 'References' },
];

export default function Page() {

    return (
        <ContentPage toc={TOC}>
            <PageTitle title="Endocrine System" />
            <PageContent>
                <Typography component="p" gutterBottom>
                    The endocrine system is a network of glands and organs that produce and secrete hormones
                    directly into the bloodstream. These chemical messengers regulate metabolism, growth, mood,
                    and nearly every long-range process the body coordinates. The sections below focus on
                    the hormonal side of carbohydrate metabolism — how food becomes fuel, and what happens
                    when that signaling breaks down.
                </Typography>

                <Section><Conversion /></Section>
                <Section alt><Timeline /></Section>
                <Section><InsulinResistance /></Section>
                <Section alt><KetosisVsInsulinResistance /></Section>

                <References items={PAGE_REFS} />

                <Typography component="p" gutterBottom sx={{ mt: 4 }}>
                    Understanding the endocrine system is crucial for maintaining overall health and well-being.
                    Hormonal imbalances can lead to various health issues, including diabetes, thyroid disorders, and reproductive problems.
                    By learning about the endocrine system, you can make informed decisions about your health and lifestyle.
                </Typography>

            </PageContent>
        </ContentPage>
    );
}
