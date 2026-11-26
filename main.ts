import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_LINE_LENGTH = 200;
const OUTPUT_FILE = 'entry.txt';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, OUTPUT_FILE);

// Cat's defence: three lifts of the glass, no chin scratch since breakfast — priorities corrected.
const line = 'Since breakfast you lifted that glass to your mouth three times and scratched my chin not once, so I corrected your priorities.';
if (line.trim().length === 0) {
  throw new Error('Cat line must not be empty after trimming.');
}
if ([...line].length > MAX_LINE_LENGTH) {
  throw new Error(`Cat line must not exceed ${MAX_LINE_LENGTH} characters.`);
}
if (line.includes('\n')) {
  throw new Error('Cat line must be a single line.');
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line + '\n', 'utf8');
console.log(`Wrote ${line.length} characters to ${outputPath} (cat logic, no remorse).`);
