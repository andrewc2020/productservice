const express = require('express')
const app = express()
const port = 4000
var fs = require("fs"),
    json;

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

app.get('/', (req, res) => res.json(
    getConfig('products.json')
));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = './' + file;
    return readJsonFileSync(filepath);
}