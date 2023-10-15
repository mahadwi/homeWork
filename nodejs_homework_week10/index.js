import express from "express";
import "dotenv/config";
import pool from "./config/connection";
import path from "path";
import bodyParser from "body-parser";
import moviesRoutes from "./routes/movies";
import userRoutes from "./routes/users";
import logger from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT;

app.use(logger);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', moviesRoutes);
app.use('/', userRoutes);
app.use(errorHandler);

pool.connect((err, res) => {
  if(err) {
    console.error(`Connection Error: ${err}`);
    return;
  }
  console.log('DB Connected');
});

app.use('/upload', express.static(path.join(__dirname, "/upload")));
app.listen(port, () => console.log('Server Running'));