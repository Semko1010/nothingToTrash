const { addProduct } = require("../db_access/user_dao");
const jwt = require('jsonwebtoken')
const verifyToken = (token,newProduct) =>{
    jwt.verify(token, process.env.JWT_SECRET, (err, authorizedData) => {
		if(err){
			//If error send Forbidden (403)
			console.log('ERROR: Could not connect to the protected route');
			res.sendStatus(403);
		} else {
			//If token is successfully verified, we can send the autorized data 
			// res.json({
			// 	message: 'Successful log in',
			// 	authorizedData
			// });
            
			console.log('SUCCESS: Connected to protected route');
		}
	})
}
module.exports = {
verifyToken
}