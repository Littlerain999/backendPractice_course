const express = require("express");
const port = 8000;
const app = express();

const router = express.Router()

app.listen(port, () => console.log(`Server listening at port:${port}......`))

router.get('/', (req, res) => {
    res.send(`Welcome to the site. Port: ${port}`)
})