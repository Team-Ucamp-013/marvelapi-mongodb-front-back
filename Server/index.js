const express = require('express')
const app = express()
require('./db/mongodb')
const router = require('./apis')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(router)

app.get('/', (req,res)=>{
    res.send('Servidor vivo')
})

const PORT = 5003
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})