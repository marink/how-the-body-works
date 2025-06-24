import { Container, Paper, Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import Image from "next/image";


export default async function Home() {

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
                <Box component="header" sx={{ mb: 4 }}>
                    <Typography variant="pageTitle" gutterBottom>
                        How the Human Body Works
                    </Typography>
                </Box>
                <Box component="main">
                    <Typography component="h1" variant="h1" gutterBottom>Introduction</Typography>
                    <Typography component="p" gutterBottom>
                        This site is your guide to understanding the incredible machine that is the human body.
                        My aim is to make science accessible and engaging for everyone, regardless of your background.
                    </Typography>
                    <Typography component="p" gutterBottom>
                        The human body is a masterpiece of biology—an intricate network of systems working in harmony to keep us alive and thriving.
                        From the beating of your heart to the signals traveling through your nerves, every function has its own story to tell.
                        Here, you’ll find easy-to-understand explanations, diagrams, and fascinating facts to help you explore the amazing processes that make you, <em>you</em>.
                    </Typography>
                    <Typography component="p" gutterBottom>
                        Whether you’re a curious student, a parent answering your child’s questions, or someone simply fascinated by the human body,
                        this site is here to provide knowledge and spark wonder. Let’s dive in and uncover the secrets of how we work!
                    </Typography>

                    <Typography component="h1" variant="h1" gutterBottom>What You Will Find Here</Typography>
                    
                    <Typography component="p" gutterBottom>
                        In this site, you will find a variety of resources designed to help you understand the human body and its functions.
                        Here are some of the key sections:
                    </Typography>
                    <ul>
                        <li>
                            <MuiLink component={Link} href="/cells"><strong>Cells</strong>: a study of the human cells and processes.</MuiLink>
                        </li>
                        <li>
                            <MuiLink component={Link} href="/endocrine-system"><strong>Endocrine System</strong>: a thorough look at hormones and how they affect behavior.</MuiLink>
                        </li>
                        <li>
                            <MuiLink component={Link} href="/health"><strong>Health</strong>: how different foods affect body processes.</MuiLink>
                        </li>
                    </ul>
                </Box>
                <Box component="footer" sx={{ mt: 4, display: "flex", gap: 2 }}>
                    <MuiLink href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
                        Learn
                    </MuiLink>
                    <MuiLink href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
                        Examples
                    </MuiLink>
                    <MuiLink href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
                        Go to nextjs.org →
                    </MuiLink>
                </Box>
            </Paper>
        </Container>
    );
}
