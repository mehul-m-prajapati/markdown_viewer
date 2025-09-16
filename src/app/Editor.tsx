'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import 'github-markdown-css/github-markdown-light.css'

function Editor() {
  const [markdown, setMarkdown] = useState(`### 📝 Welcome to the Markdown Editor

Type your markdown on the **left**, and see the **preview** on the right.

---
`);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

        <header className="bg-gray-800 text-center p-4 text-xl font-bold shadow">
            <span className="">Live Markdown Viewer</span>
        </header>

        <main className="flex flex-1 flex-col md:flex-row">

            {/* Markdown Input Panel */}
            <textarea
                className="w-full md:w-1/2 h-96 md:h-auto p-4
                text-sm font-mono bg-gray-950 text-white
                resize-none outline-none border-r border-gray-800"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Type your markdown here..."
            />

            {/* Preview Panel */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto markdown-body bg-white text-black">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </main>

        <footer className="bg-gray-800 text-gray-400 text-sm
            text-center p-3 border-t border-gray-700">
            © {new Date().getFullYear()} Markdown Viewer. All rights reserved.
        </footer>

    </div>
  )
}

export default Editor
