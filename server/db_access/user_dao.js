const { _getDB } = require('./_getDB')
const ObjectId = require('mongodb').ObjectId
//create new User
async function createNewUser(user) {
    const db = await _getDB()
    const newUser = await db.collection('users').insertOne(user)
    return newUser
}
//Check Name or email exist, User vorhanden in Datenbank 
async function checkEmailExists(email) {
    const db = await _getDB()
    const user = await db.collection('users').findOne({
        $or: [
            { email: email }
        ]
    })
    return user
}
//getallProducts
async function getAllProducts() {
    const db = await _getDB()
    const allProducts = await db.collection('products').find().toArray();
    
    return allProducts
}

async function findOneUser(id) {
    console.log('in fuction FindOne', id)
    const db = await _getDB()
    const foundUser = await db.collection('users').findOne(
        {_id: new ObjectId(id)}
        )
    const favorites = foundUser.favorites
    console.log('Function findOndeUser',favorites);
    return favorites
}

//addProduct
async function addProduct(newProduct) {
    const db = await _getDB()
    const Product = await db.collection('products').insertOne(newProduct)
    return Product
}
//user.object_id

module.exports = {
    createNewUser,
    checkEmailExists,
    addProduct,
    getAllProducts,
    findOneUser
}

