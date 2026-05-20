"use client";

import React from "react";
import { Container, Paper, Box } from "@mui/material";
import FloatingTOC from "@components/FloatingTOC";

export default function PageContainer({ children: content, toc }) {

    if (!toc || toc.length === 0) {
        return (
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
                    {content}
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ flex: 1, minWidth: 0, maxWidth: 860 }}>
                    <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
                        {content}
                    </Paper>
                </Box>
                <FloatingTOC toc={toc} />
            </Box>
        </Container>
    );
}
