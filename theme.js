"use client";

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({

    typography: {

        fontFamily: 'SF Pro Display, SF Pro Icons, SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif',
        
        margin: "16px 0",
        
        fontSize: 16,
        
        lineHeight: 1.2,
        
        pageTitle: {
            fontSize: '3rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4A148C 0%, #B71C1C 50%, #F57F17 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },

        h1: {
            paddingTop: "1rem",
            fontSize: "2rem",
            background: 'linear-gradient(135deg, #4B0082 0%, #B71C1C 50%, #F9A825 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },

        h2: {
            fontSize: "1.6rem",
            background: 'linear-gradient(135deg, #6A1B9A 0%, #C62828 50%, #F9A825 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },

        h3: {
            fontSize: "1.2rem",
            background: 'linear-gradient(135deg, #7B1FA2 0%, #D32F2F 50%, #FDD835 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },
    },

    palette: {

        primary: {
            main: '#556cd6',
        },

        secondary: {
            main: '#19857b',
        },

        error: {
            main: red.A400,
        },

        background: {
            default: '#fff',
        },

        header: {
            backgroundColor: "#002f6c"
        }
    },

    drawerWidth: 240,

    components: {

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#002f6c",
                }
            }
        },

        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
                }
            }
        },
        
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: "2rem",
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #4B0082 0%, #B71C1C 50%, #F9A825 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                h2: {
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #6A1B9A 0%, #C62828 50%, #F9A825 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                h3: {
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, #7B1FA2 0%, #D32F2F 50%, #FDD835 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }
            }
        }
    }
});


export default theme;
