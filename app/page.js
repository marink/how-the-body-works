import { Typography } from "@mui/material";
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
                    In this site, you will find a variety of resources designed to help you understand the human body and its functions.
                    Here are some of the key sections:
                </Typography>
                <ul>
                    <li>
                        <Link href="/cells"><strong>Cells</strong>: a study of the human cells and processes.</Link>
                    </li>
                    <li>
                        <Link href="/endocrine-system"><strong>Endocrine System</strong>: a thorough look at hormones and how they affect behavior.</Link>
                    </li>
                    <li>
                        <Link href="/health"><strong>Health</strong>: how different foods affect body processes.</Link>
                    </li>
                </ul>
            </PageContent>            
        </ContentPage>
    );
}
