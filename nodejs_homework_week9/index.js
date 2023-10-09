import express from "express";
import pool  from "./db/connection.js";
import bodyParser  from "body-parser";
import movies from "./routes/movies.js";
import users from "./routes/users.js";
import { errorHandling, log } from "./middleware/handlingError.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./document/swagger.json";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandling, log);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/movies', movies);
app.use('/users', users);


pool.connect((err, res) => {
  if(err) {
    console.error(`Connection Error: ${err}`);
    return;
  }
  console.log('DB Connected');
})

app.listen(port, () => [
  console.log(`Listening at http://localhost:${port}`)
]);