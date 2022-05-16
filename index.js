const express = require('express');
const bodyParser = require('body-parser')
const routes = require("./routes");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})