import { argv } from 'node:process';
export const getUserName = () => {
  if (argv[2].startsWith('--')) {
    const userName = argv[2].split('=')[1].slice(0);
    return userName;
    // console.log(`Welcome to the File Manager, ${userName}`);
  }
};
