const { _getDB } = require('../db_access/_getDB')
const ObjectId = require('mongodb').ObjectId

async function deleteFavorite(userObjId, productObjId){
    console.log('Nudel:',userObjId,productObjId)
    const db = await _getDB();
    const deleteFavorite = await db.collection('users')
    .updateOne(
        {
            _id: new ObjectId(userObjId) 
        },
        { $pull: { favorites: productObjId }}
    )
    return deleteFavorite
}


module.exports = {
    deleteFavorite
}