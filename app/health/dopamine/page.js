"use client";

import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

import PageTitle from '@components/PageTitle';
import PageContainer from '@components/PageContainer';

import RewardSetpoint from "@app/content/dopamine/reward-setpoint";

const TOC = [
    { id: 'anticipation', label: 'What Dopamine Signals' },
    { id: 'loop',         label: 'The Loop That Never Closes' },
    { id: 'tolerance',    label: 'Tolerance' },
    { id: 'parallel',     label: 'Insulin and Dopamine' },
    { id: 'sunk-cost',    label: 'Sunk Cost and Earned Skill' },
    { id: 'reset',        label: 'Resetting the Setpoint' },
    { id: 'conclusion',   label: 'Conclusion' },
    { id: 'references',   label: 'References' },
];

export default function Page() {
    return (
        <PageContainer toc={TOC}>
            <PageTitle title="Dopamine and Gaming: The Same Trap as Sugar" />
            <Typography component="p" gutterBottom sx={{ mb: 2 }}>
                The <Link href="/health">Health</Link> page explains how a constant flood of insulin teaches
                cells to ignore it, and why eating less rarely fixes the result. The brain's reward system
                follows the same rules with a different molecule. This page traces that parallel step by
                step: what dopamine actually signals, why games are built so the loop never closes, how the
                reward setpoint drifts, why the habit holds even after the fun is gone, and how the setpoint
                comes back down.
            </Typography>
            <RewardSetpoint />
        </PageContainer>
    );
}
