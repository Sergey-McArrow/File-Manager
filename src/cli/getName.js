import { argv } from 'node:process';
export const getUserName = () => {
  if (argv[2].startsWith('--')) {
    const userName = argv[2].split('=')[1].slice(0);
    return userName;
  } else console.log('Invalid input');
};
