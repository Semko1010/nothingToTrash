const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require('path')
//import functions
const { registerUser } = require("./services/registerUser");
const { LoginUser } = require("./services/loginUser");
const {
    addProduct,
    getAllProducts,
    findOneUser,
} = require("./db_access/user_dao");
const { deleteFavorite } = require("./services/deleteFavorite");
const { addFavorite } = require("./services/addFavoritetoUser");
const { json } = require("body-parser");
const { verifyToken } = require("./db_access/verifyToken");

// Allgemeine Use

dotenv.config();
app.use(cors());
app.use(express.static("uploads"));
app.use(express.json({ limit: "16mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//POST-Routen
app.post("/api/users/register", (req, res) => {
    //Daten aus Inputfeld
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //registerUser
    registerUser({ username, email, password })
        .then(() => {
            res.sendStatus(201, "User Created");
        })
        .catch((err) => {
            send("Sorry!But this User already exists!");
        });
}); //funktioniert

app.post("/api/users/login", (req, res) => {
    //daten aus Input-Feldern
    const email = req.body.email;
    const password = req.body.password;

    LoginUser({ email, password })
        .then((token) => {
            res.send(token);
        })
        .catch((err) => {
            console.log("Err bei LogIn", err);
            res.send({ err: err.message });
        });
}); //funktioniert

app.post("/api/products/addProduct/", verifyToken, (req, res) => {
    let newProduct = req.body;
    addProduct(newProduct)
        .then(() => {
            res.send({ productAdd: true });
            console.log(newProduct);
        })
        .catch((err) => {
            console.log("Err in AddProduct", err);
            res.send({ err: err.message });
        });
}); //funktioniert

app.post("/api/user/favorites", verifyToken, (req, res) => {
    console.log("favoritesPostRoute", req.body);
    const productObjId = req.body.productObjId;
    const userObjId = req.body.userObjId;
    console.log("productObjId:", productObjId);
    addFavorite(userObjId, productObjId)
        .then((userFavorite) => {
            res.status(201).send(userFavorite);
        })
        .catch((err) => {
            console.log(err, "Something went wrong at addFavorite");
        });
});

app.delete("/api/user/favorites", verifyToken, (req, res) => {
    console.log("Delete Route");
    const productObjId = req.body.productObjId;
    const userObjId = req.body.userObjId;
    console.log("delete Nudel:", userObjId, productObjId);
    deleteFavorite(userObjId, productObjId)
        .then((deleteFavorite) => {
            res.send(deleteFavorite);
        })
        .catch((err) => {
            console.log(err, "Something went wrong at deleteFavorite");
        });
});

//GET-Routen

//für den allgemeinen Marktplatz
app.get("/api/products/allProducts", (req, res) => {
    // console.log("davor");
    getAllProducts()
        .then((allProducts) => {
            // console.log(allProducts);
            res.send(allProducts);
        })
        .catch((err) => {
            console.log("Err in GET/allProducts", err);
            res.send({ err: err.message });
        });
});

app.get("/api/user/favorites", verifyToken, (req, res) => {
    const id = req.headers.userid;
    console.log("UserId", id);
    findOneUser(id)
        .then((favorites) => {
            res.send(favorites);
        })
        .catch((err) => {
            console.log("Err in userFavorites", err);
            res.send({ err: err.message });
        });
});

const PORT = process.env.PORT || 5000;
app.use('/',express.static(path.join(__dirname,'../client/build')))
app.use('*',express.static(path.join(__dirname,'../client/build')))
app.listen(PORT, () => console.log("Listening on Port,", PORT));
