"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Link as MuiLink } from '@mui/material';
import { addBasePath } from './Figure';

export default function Footer() {

    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            textDecoration: 'underline',
            color: '#000'
        }
    };
    return (
        <Box component="footer"
                sx={{
                    display: "flex",
                    gap: 2,                    
                    mt: 4, // optional: margin-top for spacing
                    fontSize: "0.9rem", 
                    color: "#666",
                    padding: 1,
                    flexDirection: "column",
                    alignItems: "center"
                }}>
            <Container maxWidth="md" sx={{ display: "flex", borderTop: "1px solid #e0e0e0", gap: 2 }}>
                <MuiLink target="_blank" rel="noopener noreferrer" sx={linkStyle}
                        href="https://www.livescience.com/37009-human-body.html">
                    <Image aria-hidden src="/images/livescience-fav.ico" width={16} height={16} 
                        alt="Learn more about the human body" />
                    Learn More
                </MuiLink>
                |
                <MuiLink target="_blank" rel="noopener noreferrer" sx={linkStyle}
                        href="https://www.thefastingmethod.com/" >
                    <Box
                        sx={{
                            width: 16,
                            height: 16,
                            overflow: 'hidden',
                            display: 'inline-block',
                            position: 'relative',
                        }}
                        >
                        <Image
                            src="https://www.thefastingmethod.com/wp-content/uploads/2024/06/Header-Logo.png"
                            alt="Window icon"
                            width={16*1597/331}
                            height={16}
                        />
                        </Box>
                    Nutrition Advice
                </MuiLink>
                |
                <MuiLink target="_blank" rel="noopener noreferrer" sx={linkStyle}
                        href="https://marin.kokona.website" >
                    <Image aria-hidden src={addBasePath("/images/globe.svg")} alt="Global Site image" width={16} height={16} />
                    Main Site
                </MuiLink>
            </Container>
        </Box>
    );
}
