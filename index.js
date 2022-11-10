import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users";
import mongoose from "mongoose";

const app = express();

await mongoose
  .connect(
    "mongodb+srv://Agent_Ebimene:09022946610@cluster0.fxgum1l.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log(" Database Connected!"))
  .catch((err) => console.log(err));

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
  duties: [
    {
      writing: String,
      coding: String,
    },
  ],
});
// convert the schema to a model

const Employee = new mongoose.model("Employee", employeeSchema);
const james = new Employee({
  name: "James",
  position: "Frontend",
  salary: 3000,
  duties: ["Blogging", "UX Writing"],
});
Employee.find({ name: "James" }, (err, data) => {
  if (err) console.log(err);
  else {
    console.log(data);
  }
});
const PORT = 5000;
//Our app will be using JSON data
app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Home page of app"));

app.listen(PORT, () => {
  console.log(`Server running on port :http://localhost:${PORT}`);
});
