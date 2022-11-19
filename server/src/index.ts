import express from 'express';
import helmet from 'helmet';
import sequelize from './configs/db.config';
import * as models from './models';
import router from './routes';
import notFoundMiddleware from './middleware/notFound.middleware';
import errorHandlerMiddleware from './middleware/errorHandler.middleware';
import setEnv from './configs/env.config';

setEnv(process.env.NODE_ENV);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.use(notFoundMiddleware);
    app.use(errorHandlerMiddleware);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
  } catch (error) {
    console.log(error);
  }
};

start();
