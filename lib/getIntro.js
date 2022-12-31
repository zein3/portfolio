import fs from 'fs';
import path from 'path';

const introPath = path.join(process.cwd(), 'content', 'intro.json');

export function getIntroData() {
  return JSON.parse(fs.readFileSync(introPath));
}