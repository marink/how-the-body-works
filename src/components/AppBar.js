"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

import { makeStyles } from '@components/styles';

/**
 * Responsive application bar for the main application.
 * This component is used to display the application logo and name.
 * It is used on all pages of the application.
 *
 * @returns
 */
function ResponsiveAppBar() {

    return (
        <AppBar position="fixed" sx={{
            boxShadow: 2,
            bgcolor: "#fffc",
            backdropFilter: "saturate(180%) blur(5px)",
            height: 60

        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <AppLogo />
                    <AppName />


                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                </Toolbar>
            </Container>
        </AppBar>
    );
}

/**
 * Application logo
 *
 * @returns
 */
const AppLogo = () => {
    return (
        <Box component="img"
                sx={{
                    height: 24,
                    width: 32,
                    paddingRight: 1
                }}
                src="human-body.jpeg" />
    )
}

/**
 * Application name component.
 *
 * @returns
 */
const AppName = () => {

    const styles = {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <Typography
                variant="h6" // H6 header
                component="a" // Anchor link
                href="/" // Point to home page
                noWrap sx={styles}>
            How the Body Works
        </Typography>
    )
}

/**
 * Used as a vertical spacer so that the page contents
 * don't fall behind the app bar.
 *
 * @returns
 */
export const AppBarSpacer = () => {

    const classes = useStyles();

    return (
        <Box sx={classes.contentHeader} />
    )
}

export default ResponsiveAppBar;


/**
 * Define main layout styles.
 */
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));
