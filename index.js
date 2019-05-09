const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`server is gestart op port ${port}`));

const camelCase = require('camelcase');

app
    .set("view engine", "ejs")

    .get("/", home)
    .get("/register", fetchRegister)
    
    .use(function (req, res, next ){
        res.status(404).send("Sorry the page your looking for does not exist?!")
    });
;
function home(req, res) {
    res.render('index.ejs')
  }
function fetchRegister(req, res) {
    res.render('register.ejs')
}