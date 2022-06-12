import { createWriteStream, read } from 'node:fs';
import { stdin, stdout, exit } from 'node:process';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { getUserName } from '../cli/getName.js';
import { list, getFiles } from '../fs/list.js';
import { writeCurrentDir, writeOperationFailed } from './writeMessages.js';
import { create } from '../fs/create.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userName = getUserName();
const pathToDir = path.resolve(process.env.USERPROFILE);
let currentPath = pathToDir;

export const inputHandler = async () => {
  stdout.write(`Welcome to the File Manager, ${userName}\n`);
  writeCurrentDir(currentPath);
  stdin.on('data', data => {
    if (data) {
      if (data.toString().trim() === '.exit') {
        stdout.write(`Thank you for using File Manager, ${userName}!\n`);
        exit();
      } else if (data.toString().trim() === 'up') {
        currentPath = path.parse(pathToDir).dir;
        writeCurrentDir(currentPath);
      } else if (data.toString().trim().startsWith('cd')) {
        const inputPathToDir = data.toString().trim().split(' ')[1];
        const dirPath = path.resolve(currentPath, inputPathToDir);
        // else writeOperationFailed();
        writeCurrentDir(dirPath);
      } else if (data.toString().trim() === 'ls') {
        list(currentPath);
      } else if (data.toString().trim().startsWith('cat')) {
        const inputPathToFile = data.toString().trim().split(' ')[1];
        const filePath = path.resolve(currentPath, inputPathToFile);
        console.log(filePath);
        // read(currentPath);
      } else if (data.toString().trim().startsWith('add')) {
        const inputPathToFile = data.toString().trim().split(' ')[1];
        const filePath = path.resolve(currentPath, inputPathToFile);
        await create(filePath);
      }
    }
  });
  process.on('SIGINT', () =>
    stdout.write(`Thank you for using File Manager, ${userName}!\n`)
  );
};
