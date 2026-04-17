import { Blockquote } from "./elements/blockquote";
import { H1 } from "./elements/h1";
import { H2 } from "./elements/h2";
import { H3 } from "./elements/h3";
import { HR } from "./elements/hr";
import { LI } from "./elements/li";
import { OL } from "./elements/ol";
import { P } from "./elements/p";
import { UL } from "./elements/ul";
import React from "react";

/**
 * A simple markdown to React component converter.
 * Note: This is a basic implementation and does not handle all markdown features.
 */
export function Markdown({ content }: { content: string }) {
  // 1. Normalize and split into blocks
  const normalized = content
    .replace(/<bq>/g, '\n<bq>\n')
    .replace(/<\/bq>/g, '\n</bq>\n');

  const lines = normalized.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let listBuffer: { type: 'ul' | 'ol', items: React.ReactNode[] } | null = null;
  let inBq = false;
  let bqBuffer: string[] = [];
  let pBuffer: string[] = [];

  const flushP = () => {
    if (pBuffer.length > 0) {
      const text = pBuffer.join(' ').trim();
      if (text) {
        elements.push(<P key={`p-${elements.length}`}>{parseStyles(text)}</P>);
      }
      pBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer) {
      const ListComp = listBuffer.type === 'ul' ? UL : OL;
      elements.push(
        <ListComp key={`list-${elements.length}`}>
          {listBuffer.items.map((item, i) => <LI key={i}>{item}</LI>)}
        </ListComp>
      );
      listBuffer = null;
    }
  };

  const flushBq = () => {
    if (inBq && bqBuffer.length > 0) {
      elements.push(
        <Blockquote key={`bq-${elements.length}`}>
          <Markdown content={bqBuffer.join('\n')} />
        </Blockquote>
      );
      bqBuffer = [];
    }
  };

  function parseStyles(text: string): React.ReactNode {
    // Naive regex replacement to HTML then dangerouslySetInnerHTML for inline only
    const html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '<bq>') {
      flushP();
      flushList();
      inBq = true;
      continue;
    }

    if (trimmed === '</bq>') {
      flushBq();
      inBq = false;
      continue;
    }

    if (inBq) {
      bqBuffer.push(line);
      continue;
    }

    if (trimmed === '') {
      flushP();
      flushList();
      continue;
    }

    // Headers
    const hMatch = line.match(/^(#{1,6}) (.*)/);
    if (hMatch) {
      flushP();
      flushList();
      const level = hMatch[1].length;
      const content = hMatch[2];
      const H = level === 1 ? H1 : level === 2 ? H2 : H3;
      elements.push(<H key={`h-${elements.length}`}>{parseStyles(content)}</H>);
      continue;
    }

    // HR
    if (trimmed === '---') {
      flushP();
      flushList();
      elements.push(<HR key={`hr-${elements.length}`} />);
      continue;
    }

    // Lists
    const ulMatch = line.match(/^- (.*)/);
    if (ulMatch) {
      flushP();
      if (!listBuffer || listBuffer.type !== 'ul') {
        flushList();
        listBuffer = { type: 'ul', items: [] };
      }
      listBuffer.items.push(parseStyles(ulMatch[1]));
      continue;
    }

    const olMatch = line.match(/^\d+\. (.*)/);
    if (olMatch) {
      flushP();
      if (!listBuffer || listBuffer.type !== 'ol') {
        flushList();
        listBuffer = { type: 'ol', items: [] };
      }
      listBuffer.items.push(parseStyles(olMatch[1]));
      continue;
    }

    // Paragraph
    flushList();
    pBuffer.push(line);
  }

  flushP();
  flushList();

  return <>{elements}</>;
}
