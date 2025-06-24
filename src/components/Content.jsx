"use client";

import React from "react";

import Citation from "@components/Citation";


const options = {
    replace: (domNode) => {
        if (domNode.name === 'citation') {
            const author = domNode.children.find(child => child.name === 'author')?.children[0]?.data;
            return <Citation author={author} />;
        }
    }
};

/**
 * MarkdownPage Component
 *
 * This component is a Markdown page processor that renders it as HTML with
 * GitHub style formatting.
 *
 * @returns {JSX.Element} - A React component that renders a markdown page.
 * @description This component fetches a markdown file based on the URL parameters,
 *      processes it into HTML using `unified` with `remark` and `rehype` plugins,
 *      and displays the HTML content. It handles both markdown files and directories
 *      (defaulting to `README.md` if a directory is specified).
 */
export default function Content({ children }) {    

    return <div className="markdown-body">{children}</div>;
}
