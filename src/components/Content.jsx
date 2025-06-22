"use client";

import React from "react";
import { useEffect, useState } from "react";

import Citation from "@components/Citation";

import path from "path-browserify";

import { marked } from "marked";
import parse from 'html-react-parser';

import { createHighlighter, bundledLanguages, bundledThemes } from 'shiki';

import {addBasePath} from  'next/dist/client/add-base-path';

import "./markdown.css";

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
export default function Content({ contentPath, basePath }) {

    // State hooks for managing the HTML content
    const [html, setHtml] = useState("Loading content...");

    // If the path does not end with .md, assume it's a directory
    // and append README.md by default
    if (!contentPath.endsWith(".md") && !contentPath.endsWith(".html")) {
        contentPath = path.join(contentPath, "README.md");
    }


    useEffect(() => {

        /**
         * Fetch the markdown file from the server and convert it to HTML.
         * Uses `unified` with `remark` and `rehype` plugins to process the markdown.
         *
         * @param {string} contentPath - The path to the markdown file.
         * @returns {Promise<void>} - A promise that resolves when the markdown is fetched and processed.
         * @throws {Error} - Throws an error if the fetch fails or the response is not ok.
         * @example
         *     fetchMarkdown('/docs/some-folder/README.md')
         *         .then(() => console.log('Markdown fetched and processed'))
         *         .catch(error => console.error('Error fetching markdown:', error));
         */
        async function fetchContent(contentPath) {

            const highlighter = await createHighlighter({
                // In this case, we include the "js" language specifier to ensure that
                // Shiki applies the appropriate syntax highlighting for Markdown code
                // blocks.
                themes: Object.keys(bundledThemes),
                langs: Object.keys(bundledLanguages),
            })

            try {

                // Prepend basePath if not already present
                const fetchPath = addBasePath(contentPath);
 
                const response = await fetch(fetchPath);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                var text = await response.text();

                if (contentPath.endsWith(".md")) {
                    text = await marked.use(markedShiki({
                        highlight(code, lang) {
                            return highlighter.codeToHtml(code, {
                                lang: lang,
                                theme: 'github-dark'
                            });
                        }
                    })).parse(text);
                }

                setHtml(parse(text, options));
            } catch (error) {
                console.error("Error fetching markdown:", error);
                setHtml(`<h1>File not found ${contentPath}</h1>`);
            } finally {
                // Dispose of the highlighter to free up resources
                highlighter.dispose();
            }
        }

        if (contentPath) {
            fetchContent(contentPath);
        }

    }, [contentPath]);

    return <div className="markdown-body">{html}</div>;
}


function markedShiki(options) {
    const { highlight, container } = options

    return {
        walkTokens(token) {

            if (token.type !== 'code' || typeof highlight !== 'function') return

            const [lang, ...props] = (token.lang) ? token.lang.split(' ') : ['text'];
            const { text } = token;

            const highlightedText = highlight(text, lang, props)
            const htmlText = !container
                ? highlightedText
                : container
                    .replace('%l', String(lang).toUpperCase())
                    .replace('%s', highlightedText)
                    .replace('%t', text)

            // transforms token to html
            Object.assign(token, {
                type: 'html',
                block: true,
                text: `${htmlText}\n`
            })
        }
    }
}

// Helps with hot reloading as you're editing specific content
// import "./updated-pages"
