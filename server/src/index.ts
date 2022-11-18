import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
import sequelize from './db';

const PORT = process.env.PORT || 3000;
const app = express();

const start = async () => {
  try {
    app.use(helmet());
    app.use(express.json());

    sequelize.authenticate();
    sequelize.sync();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
