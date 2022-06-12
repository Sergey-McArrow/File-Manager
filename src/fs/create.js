import { writeFile } from 'node:fs/promises';
import { writeOperationFailed } from '../streams/writeMessages.js';
const filecontent = '';

export const create = async filePath => {
  try {
    await writeFile(filePath, filecontent, { flags: wx });
  } catch (e) {
    console.log(e.message);
    // writeOperationFailed();
  }
};
