import dotenv from 'dotenv';
import path from 'path';

const setEnv = (env: string) => {
  let envFile: string;
  switch (env) {
    case 'prod':
      envFile = '.env';
      break;
    case 'dev':
      envFile = '.dev.env';
      break;
  }
  const envFilePath = path.resolve(__dirname, `../../${envFile}`);
  const status = dotenv.config({ path: envFilePath });
  if (status.error) {
    throw Error(status.error.message);
  }
};

export default setEnv;
