export const parseEnv = () => {
  const envVariable = process.env;
  console.log(envVariable);
  for (const key in envVariable) {
    if (key.startsWith('RSS_')) console.log(key + '=' + envVariable[key]);
  }
};
parseEnv();
