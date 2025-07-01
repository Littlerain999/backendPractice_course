const express = require('express');
const userRouter = require("./router/user")
const connection = require('./config/database')

const app = express();

const port = 8000;

app.use(userRouter);

connection()

app.listen(port, (req, res) => {
  
  console.log(`Server listening at ${port}`);
})


