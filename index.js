import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users";

const app = express();
const PORT = 5000;
//Our app will be using JSON data
app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Home page of app"));

app.listen(PORT, () => {
  console.log(`Server running on port :http://localhost:${PORT}`);
});
