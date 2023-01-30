import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const projectsDir = path.join(process.cwd(), 'content', 'projects');

export function getAllProjects() {
  const filenames = fs.readdirSync(projectsDir);
  const projectsData = filenames.map(filename => {
    const fullPath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { metadata, content } = parseMD(fileContents);
    const cleanedContent = sanitizeHtml(marked.parse(content));

    return {
      metadata,
      content: cleanedContent
    };
  })

  return projectsData.sort((a, b) => {
    return (a.metadata.date > b.metadata.date) ? -1 : 1;
  })
}