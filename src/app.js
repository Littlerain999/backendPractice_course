const express = require('express');
const userRouter = require("./router/user")

const app = express();

const port = 8000;

app.use(userRouter);


app.listen(port, (req, res) => {
  res.send(`Server listening at ${port}`);
})