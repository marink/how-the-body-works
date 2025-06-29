import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageContent({children: content}) {

    return (        
        <Box component="main">
            {content}
        </Box>
    );
}
