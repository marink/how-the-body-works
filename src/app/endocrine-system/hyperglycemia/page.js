"use client";

import React from 'react';

import PageTitle from '@components/PageTitle';
import PageContent from '@components/PageContent';
import PageContainer from '@components/PageContainer';

import Hyperglycemia from "@app/content/glucose/hyperglycemia";

export default function Page() {
    return (
        <PageContainer>
            <PageTitle title="Hyperglycemia" />
            <PageContent>
                <Hyperglycemia/>
            </PageContent>
        </PageContainer>
    );
}
