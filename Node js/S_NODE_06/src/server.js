const express = require('express')
const { parse } = require('path')

const app = express()

app.get('/ghbrthtr', (req, res) => {

    res.status(200)
    res.json({ message: 'dwa' })

})
app.post('/', function (req, res) {
    console.log(res.body.title);
    res.send(req.body);
});
module.exports = app