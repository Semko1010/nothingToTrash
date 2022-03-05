import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./scss/main.scss";
import Nav from "./components/nav/Nav";
import axios from "axios";
// Pages
import Home from "./pages/home/Home";
import Marktplatz from "./pages/marktplatz/Marktplatz";
import Ueberuns from "./pages/ueberuns/Ueberuns";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddProduct from "./pages/addProduct/AddProduct";
import Wishlist from "./pages/wishlist/Wishlist";
import DetailPage from "./pages/detailPage/DetailPage";

const newToken = createContext({});
const newUserId = createContext({});
const favorite = createContext({});
function App() {
    const [favoritesItem, setFavoritesItem] = useState("");
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);

    return (
        <>
            <favorite.Provider value={{ favoritesItem, setFavoritesItem }}>
                <newToken.Provider value={{ token, setToken }}>
                    <newUserId.Provider value={{ userId, setUserId }}>
                        <Router>
                            <Nav />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/marktplatz"
                                    element={<Marktplatz />}
                                />
                                <Route
                                    path="/ueberuns"
                                    element={<Ueberuns />}
                                />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                                <Route
                                    path="/addproduct"
                                    element={<AddProduct />}
                                />
                                <Route
                                    path="/wishlist"
                                    element={<Wishlist />}
                                />
                                <Route
                                    path="/details/:id"
                                    element={<DetailPage />}
                                />
                            </Routes>
                        </Router>
                    </newUserId.Provider>
                </newToken.Provider>
            </favorite.Provider>
        </>
    );
}
export { newToken, newUserId, favorite };
export default App;
