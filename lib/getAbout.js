import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'content', 'about.json');

export function getAboutData() {
  return JSON.parse(fs.readFileSync(dataPath));
}