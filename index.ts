import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

// routes
import userRoutes from "./routes/users";

//For env File
dotenv.config();

const app: Application = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
