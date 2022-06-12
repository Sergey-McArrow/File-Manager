import { stdout } from 'node:process';

export const writeCurrentDir = async path => {
  stdout.write(`You are currently in ${path}\n`);
};

export const writeOperationFailed = async () => {
  stdout.write(`Operation failed\n`);
};
export const writeContent = async content => {
  stdout.write(content);
};
