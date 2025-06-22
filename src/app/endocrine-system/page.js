"use client";

import React from 'react';

import Content from '@components/Content';

import { useRouter } from "next/navigation";

export default function Page() {
    
    const router = useRouter();

    console.log("Router basePath:", router);

    return (
        <div className="markdown-body">
            <h1>Endocrine System</h1>
            <p>The endocrine system is a complex network of glands and organs that produce and secrete hormones into the bloodstream.
                These hormones regulate various bodily functions, including metabolism, growth, and mood.</p>
            
            <Content contentPath="/content/glucose/conversion.html" basePath={router.basePath}/>
            {/* Icon: Timeline Illustration */}
            <Content contentPath="/content/glucose/timeline.html" basePath={router.basePath}/>
                {/* Icon: Insulin Resistance Pathway */}
            {/* Icon: Ketosis vs Insulin Resistance */}
            <Content contentPath="/content/insulin/ketosis-comparison.html" basePath={router.basePath}/>
            {/* Icon: Insulin Resistance Pathway */}ß

        </div>
    )
}
