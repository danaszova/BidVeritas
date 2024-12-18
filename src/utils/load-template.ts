import * as fs from 'fs';
import * as path from 'path';

export const loadTemplate = (ssp: string, format: string): object => {
  const filePath = path.join(process.cwd(), 'src', 'templates', ssp, `${format}.json`);

  // Check if the template file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Template for SSP '${ssp}' with format '${format}' not found.`);
  }

  // Load and parse the template file
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};
