"use client";

import React from "react";

import { Container, Paper } from "@mui/material";


export default function PageContainer({children: content}) {

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
                {content}
            </Paper>
        </Container>
    );
}
