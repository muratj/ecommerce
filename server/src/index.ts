import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
