import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const skillsPath = path.join(process.cwd(), 'content', 'skills.json');
const aboutPath = path.join(process.cwd(), 'content', 'about.md');

export function getAboutData() {
  const skills = JSON.parse(fs.readFileSync(skillsPath));

  const aboutContent = fs.readFileSync(aboutPath, 'utf8');
  const content = sanitizeHtml(marked.parse(aboutContent));

  return {
    content,
    skills: skills.skills
  }
}