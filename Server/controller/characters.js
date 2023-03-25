const marvelModel = require('../model/favorite')

const getmarvel = async()=>{
    return await marvelModel.find({})
}

const createmarvel = async(body) =>{
    const newCharacter = new marvelModel(body)
    await newCharacter.save()
    return newCharacter
}

module.exports = {
    getmarvel,
    createmarvel
}

