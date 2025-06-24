"use client";

import React from 'react';

import Conversion from '@app/content/glucose/conversion';
import Timeline from '@app/content/glucose/timeline';
import InsulinResistance from '@app/content/insulin/resistance';
import KetosisVsInsulinResistance from '@app/content/insulin/ketosis';

import ContentPage from '@components/PageContainer';
import PageTitle from '@components/PageTitle';
import PageContent from '@components/PageContent';
import { Typography } from '@node_modules/@mui/material';

export default function Page() {

    return (
        <ContentPage>
            <PageTitle title="Endocrine System" />
            <PageContent>
                <Typography component="p" gutterBottom>
                    The endocrine system is a complex network of glands and organs that produce and secrete hormones into the bloodstream.
                    These hormones regulate various bodily functions, including metabolism, growth, and mood.
                </Typography>
                
                <Conversion/>

                <Timeline />
                {/* Icon: Timeline Illustration */ }

                <InsulinResistance />
                {/* Icon: Insulin Resistance Pathway */ }

                <KetosisVsInsulinResistance />
                {/* Icon: Ketosis vs Insulin Resistance */ }
                
                <Typography component="p" gutterBottom>
                    Understanding the endocrine system is crucial for maintaining overall health and well-being.
                    Hormonal imbalances can lead to various health issues, including diabetes, thyroid disorders, and reproductive problems.
                    By learning about the endocrine system, you can make informed decisions about your health and lifestyle.
                </Typography>


                <Typography component="p" gutterBottom>
                    <i>Disclaimer:</i> This page is a work in progress. Please check back later for more information.
                </Typography>

            </PageContent>
        </ContentPage>
    );
}
