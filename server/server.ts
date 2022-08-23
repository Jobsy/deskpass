import dotenv from 'dotenv';
import app from "./app";

dotenv.config();

const port = process.env.HTTPPORT || 8000;


// documentation
// dockers

if (process.env.NODE_ENV !== 'test') {
  app.listen(8000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}