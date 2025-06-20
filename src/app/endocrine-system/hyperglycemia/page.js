"use client";

import React from 'react';

import Content from '@components/Content';

export default function Page() {
    return (
        <div className="markdown-body">
            <h1>Hyperglycemia</h1>
            <Content contentPath="/content/glucose/hyperglycemia.html" />
        </div>
    );
}
