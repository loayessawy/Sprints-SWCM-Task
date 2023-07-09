require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const app = express();

mongoose
    .connect(process.env.CONNECTION_STRING, {})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log(e);
    });

// body parser middleware to pare the body of every request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
