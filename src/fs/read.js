import { readFile } from 'node:fs/promises';
import { writeContent } from '../streams/writeMessages.js';

export const read = async path => {
  try {
    const textFromFile = await readFile(
      path,
      { encoding: 'utf8' },
      { flags: 'r' }
    );
    writeContent(textFromFile);
  } catch (e) {
    console.log(e.message);
  }
};
