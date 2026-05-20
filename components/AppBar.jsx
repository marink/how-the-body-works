"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { makeStyles } from '@components/styles';
import { addBasePath } from 'next/dist/client/add-base-path';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

/**
 * Responsive application bar for the main application.
 * This component is used to display the application logo and name.
 * It is used on all pages of the application.
 *
 * @returns
 */
function ResponsiveAppBar() {

    const style = {
        boxShadow: 2,
        bgcolor: "#fffc",
        backdropFilter: "saturate(180%) blur(5px)",
        height: 60

    };
    return (
        <AppBar position="fixed" sx={style} color="default">
            <Container maxWidth="md">
                <Toolbar disableGutters>

                    <AppLogo />
                    <AppName />
                    <Box sx={{ flexGrow: 1 }} />
                    <NavLinks />

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
    const imageSrc = addBasePath("/images/human-body.png");
    return (
        <Link href="/">
            <Box component="img"
                    sx={{
                        width: 64,
                        paddingRight: 1,
                    }}
                    src={imageSrc} />
        </Link>
    )
}

const NavLinks = () => (
    <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
        {[
            { href: '/health', label: 'Health' },
            { href: '/cells', label: 'Cells' },
            { href: '/endocrine-system', label: 'Endocrine System' },
        ].map(({ href, label }) => (
            <Link key={href} href={href} passHref legacyBehavior>
                <Typography component="a" sx={{ fontWeight: 500, color: 'text.primary', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'primary.main' } }}>
                    {label}
                </Typography>
            </Link>
        ))}
    </Box>
);

const AppName = () => {

    const styles = {
        display: { xs: 'none', md: 'flex' },
        fontWeight: 700,
        fontSize: "2rem",
        background: 'linear-gradient(135deg, #4B0082 0%, #E65100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        paddingBottom: 2,
        textDecoration: 'none',
    };

    return (        
        <Link href="/" passHref legacyBehavior>
            <Typography
                variant="h6"
                component="a"
                noWrap
                sx={styles}
            >
                How the Body Works
            </Typography>
        </Link>
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
