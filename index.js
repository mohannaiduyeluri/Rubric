const express = require("express");
const app = express();
const path = require('path');
const _dirname = path.resolve();

app.use(express.json());

app.use(express.static(_dirname + "/public"));
app.get('/', (reg, res) => res.sendFile(path.join(_dirname, '/public', 'index.html')));
app.use(function (reg, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"),
        next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));