const express = require('express')
const router = express.Router()

const marvelRouter = require('./characters')

router.use('/marvel', marvelRouter)


module.exports = router