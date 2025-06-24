"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageTitle({title}) {

    return (        
        <Box component="header" sx={{ mb: 4 }}>
            <Typography variant="pageTitle" gutterBottom>
                {title}
            </Typography>
        </Box>
    );
}
