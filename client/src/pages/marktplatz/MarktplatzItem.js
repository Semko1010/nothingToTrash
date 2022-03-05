import { NavLink } from "react-router-dom";
import axios from "axios";
import { newUserId, newToken, favorite } from "../../App";
import { useContext, useState, useEffect } from "react";
const MarktplatzItem = (props) => {
    const [toggle, setToggle] = useState(false);
    const { favoritesItem, setFavoritesItem } = useContext(favorite);
    const { userId } = useContext(newUserId);
    const { token } = useContext(newToken);
    const productId = props.id;
    // *------------------------------------------
    // *GEHT -------------
    const addToWishlist = () => {
        axios
            .post(
                "/api/user/favorites",
                { userObjId: userId, productObjId: productId },
                {
                    headers: {
                        token,
                    },
                }
            )
            .then(() => {
                axios
                    .get("/api/user/favorites", {
                        headers: { token, userId },
                    })
                    .then((res) => {
                        setFavoritesItem(res.data);
                    });
            });
    };

    // *------------------------------------------
    // *GEHT -------------
    const deleteFromWishlist = () => {
        console.log("delete");
        axios
            .delete("/api/user/favorites/", {
                data: { userObjId: userId, productObjId: productId },
                headers: {
                    token,
                },
            })
            .then(() => {
                axios
                    .get("/api/user/favorites", {
                        headers: { token, userId },
                    })
                    .then((res) => {
                        setFavoritesItem(res.data);
                    });
            });
    };

    return (
        <div className="marktplatzitem">
            {/* <button onClick={fav}>Favorites</button> */}
            <img src={props.Bild} alt={props.Titel} />
            <div className="text">
            <h3>{props.Titel}</h3>
                {props.Festpreis ? (
                    <h4>{props.Preis}EUR</h4>
                ) : props.VB ? (
                    <h4>{props.Preis}EUR VB</h4>
                ) : (
                    <h4>Zu Verschenken</h4>
                )}
                <div>
                    <p>Zustand</p>
                    <span>{props.Zustand}</span>
                    <p>Lieferung</p>
                    <span>{props.Lieferung ? "ja" : "nein"}</span>
                    <p>Auf Lager</p>
                    <span>{props.Anzahl}</span>
                </div>
            </div>
            <div>
                <NavLink className="btn-primary" to={`/details/${props.id}`}>
                    Details
                </NavLink>
                {token &&
                    (props.fav ? (
                        <button
                            onClick={deleteFromWishlist}
                            className="btn-primary delete-btn"
                        >
                            Von der Wunschliste entfernen
                        </button>
                    ) : (
                        <button
                            onClick={addToWishlist}
                            className="btn-primary wishlist-btn"
                        >
                            Auf die Wunschliste
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default MarktplatzItem;
