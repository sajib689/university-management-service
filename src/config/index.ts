import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  defaultUserPasswords: process.env.DEFAULT_USER_PASS
};
