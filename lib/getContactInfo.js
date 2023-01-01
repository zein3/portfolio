import fs from 'fs';
import path from 'path';

const contactPath = path.join(process.cwd(), 'content', 'contacts.json');

export function getContactInfo() {
  return JSON.parse(fs.readFileSync(contactPath));
}