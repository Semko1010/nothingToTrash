const { _getDB } = require('../db_access/_getDB')
const ObjectId = require('mongodb').ObjectId

async function addFavorite(userObjId, productObjId){
    console.log('add data:', userObjId,productObjId)
    const db = await _getDB();
   const userFavorite = await db.collection('users')
   .updateOne({
        _id: new ObjectId(userObjId) 
    }, //welche Object_id soll geupdated werden
    { $push: { favorites: productObjId }} // was soll geupdatet werden ohne {} wird direkt der String gepushed
    )
    return  userFavorite
}//funktioniert 

module.exports = {
    addFavorite
}

/* wir wollen keine duplikate in wishlist
checkboxen im frontend angeklickt bleiben, wenn sie den Favoriten hinzugefügt wurden */