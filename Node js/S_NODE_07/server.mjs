import express from 'express';
import Bp from 'body-parser';

const app = express()

app.use(Bp.json())
// app.use(Bp.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
})

app.listen(5050, () => {
    console.log('Server is running')
})