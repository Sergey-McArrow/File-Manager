import { readdir } from 'node:fs/promises';
import { stdout } from 'node:process';
import { writeOperationFailed } from '../streams/writeMessages.js';

export const list = async path => {
  try {
    const files = await getFiles(path);
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    if (e.code === 'ENOENT') {
      writeOperationFailed();
    } else {
      stdout.write(e.message);
    }
  }
};

export const getFiles = async path => {
  try {
    let files = await readdir(path);
    return files;
  } catch (e) {
    if (e.code === 'ENOENT') {
      writeOperationFailed();
    } else {
      stdout.write(e.message);
    }
  }
};
