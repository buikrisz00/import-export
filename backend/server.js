const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const frontend = path.join(`${__dirname}/../frontend`);
const port = 9000;

app.get("/", (req, res) => {
    res.sendFile(`${frontend}/index.html`);
})

app.get("/image-list", (req, res) => {
    fs.readFile(`${frontend}/data.json`, (error, data) => {
        if (error) {
            console.log(error);
            res.send("Error reading file");
        } else {
            const images = JSON.parse(data);
            res.send(images);
        }
    })
})

app.use("/public", express.static(`${frontend}/public`));

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})