const express = require("express");
const app = express();
const db = require("./config/database");
const port = 8000;

const usersrouter =require("./router/userRoute")

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/api",usersrouter)


app.get("/", (req, res) => res.send("Hello World!"));






// Connect database in this code
const initApp = async () => {
  console.log("Testing the database connection ");
  try {
    await db.authenticate();
    console.log("Connection has been esatablished succesfully");
    // Synchronize the book model

    app.listen(port, () => console.log(` app listening on port port! ${port}`));
  } catch (error) {
    console.log("Unable to connect to the database ")
  }
};

// initalize the application

initApp();
