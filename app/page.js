import { Typography, Box, Card, CardContent } from "@mui/material";
import Link from "next/link";

import ContentPage from "@components/PageContainer";
import PageTitle from "@components/PageTitle";
import PageContent from "@components/PageContent";


export default async function Home() {

    return (
        <ContentPage>
            <PageTitle title="Welcome to: How the Human Body Works!" />
            <PageContent>
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
                    Three interconnected areas, each building on the last. Understanding how <Link href="/cells">cells</Link> work
                    makes the <Link href="/endocrine-system">endocrine system</Link> intuitive; understanding hormones makes the
                    <Link href="/health"> health implications of diet</Link> click into place.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2, mt: 2 }}>
                    {[
                        {
                            href: '/cells',
                            title: 'Cells',
                            desc: 'How cells absorb glucose, respond to insulin signals, and convert fuel into the energy that powers every process in the body.',
                        },
                        {
                            href: '/endocrine-system',
                            title: 'Endocrine System',
                            desc: "Hormones as the body's chemical messaging network — what they signal, how glands regulate them, and what happens when they fall out of balance.",
                        },
                        {
                            href: '/health',
                            title: 'Health',
                            desc: 'How food choices — especially sugar and refined carbohydrates — shape insulin, metabolism, and long-term wellbeing.',
                        },
                    ].map(({ href, title, desc }) => (
                        <Link key={href} href={href} style={{ textDecoration: 'none' }}>
                            <Card variant="outlined" sx={{ height: '100%', transition: 'border-color 0.2s', '&:hover': { borderColor: 'primary.main' } }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>{title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{desc}</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </Box>
            </PageContent>            
        </ContentPage>
    );
}
