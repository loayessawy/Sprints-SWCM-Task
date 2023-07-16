const mongoose = require('mongoose')


const connect = () => mongoose.connect('mongodb://localhost:27017/test');

const student = new mongoose.Schema({
    firstName: String
})

const Student = mongoose.model('student', student)

connect()
    .then(async connection => {
        const student = await Student.create({ firstName: "sad" })
        console.log(student)
    })
    .catch(e => console.log(e))