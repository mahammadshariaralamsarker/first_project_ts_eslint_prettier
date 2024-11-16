import dotenv from 'dotenv';

import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
// D:\workStation\Level2\Mission2\Module8\first-project\.env
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
