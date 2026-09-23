"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ArticleContents({ links }: { links: { id: string; title: string }[] }) {
  const [open, setOpen] = useState(false);
  return <nav className="article-nav" aria-label="On this page">
    <p className="contents-heading">On this page</p>
    <button type="button" className="contents-toggle" aria-expanded={open} aria-controls="article-contents" onClick={() => setOpen(!open)}>On this page <ChevronDown size={18}/></button>
    <div id="article-contents" className="contents-links" data-open={open}>
      {links.map(link => <a href={`#${link.id}`} key={link.id} onClick={() => setOpen(false)}>{link.title}</a>)}
    </div>
  </nav>;
}
