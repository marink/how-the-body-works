"use client";

import React from 'react';

import Content from '@components/Content';
import Conversion from '@app/content/glucose/conversion';

export default function Page() {

    return (
        <div className="markdown-body">
            <h1>Endocrine System</h1>
            <p>The endocrine system is a complex network of glands and organs that produce and secrete hormones into the bloodstream.
                These hormones regulate various bodily functions, including metabolism, growth, and mood.</p>
            
            <Content><Conversion/></Content>
            {/* Icon: Timeline Illustration * /}
            <Content contentPath="/content/glucose/timeline.html" />
                {/* Icon: Insulin Resistance Pathway * /}
            {/* Icon: Ketosis vs Insulin Resistance * /}
            <Content contentPath="/content/insulin/ketosis-comparison.html" />
            {/* Icon: Insulin Resistance Pathway */}ß

        </div>
    )
}
