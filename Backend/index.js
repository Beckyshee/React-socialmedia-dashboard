import express from 'express';
import dotenv from 'dotenv'
import logger from './src/utils/logger.js'
import userRouter from './src/routes/userRoutes.js';
import postRouter from "./src/routes/postRoutes.js";

import bodyParser from 'body-parser';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Routes

app.use( "/api/users", userRouter );
app.use("/api/posts", postRouter);



app.listen(port, () => {
  logger.info(`server running on port http://localhost:${port}`);
});