const express = require('express')
const router = express.Router()
const {marvelController} = require('../controller')
const {
    getmarvel,
    createmarvel
} = marvelController

router.get('/', async(req,res)=>{
    console.log('get')
    const character = await getmarvel()
    res.send(character)
})

router.post('/', async(req,res)=>{
    const newCharacter = req.body
    console.log(newCharacter)
   
    try{
        const newmarvel = await createmarvel(newCharacter)
        res.status(201)
        res.send(newmarvel)
    } catch(err){
        console.error(err)
    }
})

module.exports = router