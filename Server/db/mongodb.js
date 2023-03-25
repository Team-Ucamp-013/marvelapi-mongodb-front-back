const mongoose = require('mongoose')

const url = 'mongodb+srv://DanyPM:lWkWTFiYntCiLT8A@cluster0.gsn0mmj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)
.then(()=>{
    console.log("--------------------")
    console.log("Base de datos conectada")
    console.log("--------------------")
})
.catch((error)=>{
    console.error(error)
})

module.exports = mongoose