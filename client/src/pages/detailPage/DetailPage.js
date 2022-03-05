import { NavLink } from "react-router-dom";
import FooterEnd from "../../components/footerEnd/FooterEnd";

import { useParams } from "react-router-dom";
import useDataFetch from "../../hooks/useDatafetch";
import { BiLoaderCircle } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { newToken, favorite, newUserId } from "../../App";
import axios from "axios";

const DetailPage = () => {
    const { userId } = useContext(newUserId);
    const { favoritesItem, setFavoritesItem } = useContext(favorite);
    const { token } = useContext(newToken);
    let { id } = useParams();
    const { data, loading } = useDataFetch();
    let oneData = data.filter((e) => e._id === id)[0];
    // let fav = favoritesItem.includes(oneData._id);

    // *------------------------------------------
    // *GEHT -------------
    const addToWishlist = () => {
        axios
            .post(
                "/api/user/favorites",
                { userObjId: userId, productObjId: oneData._id },
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
        axios
            .delete("/api/user/favorites/", {
                data: { userObjId: userId, productObjId: oneData._id },
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
        <>
            {loading && (
                <div className="loading-Div">
                    <h2>
                        <BiLoaderCircle className="circle" />
                    </h2>
                </div>
            )}
            {!loading && (
                <section className="detailPage-Sec">
                    <figure>
                        <img src={oneData.Bild.convertedImage} alt="" />
                        {userId === oneData.userObjId && (
                            <figcaption>
                                <NavLink
                                    className="btn-primary"
                                    id="btn"
                                    to="/"
                                >
                                    Bearbeiten
                                </NavLink>
                                <NavLink
                                    className="btn-primary"
                                    id="btn1"
                                    to="/"
                                >
                                    Verkauft
                                </NavLink>
                            </figcaption>
                        )}
                    </figure>
                    <div className="detailText">
                        <h2>{oneData.Titel}</h2>
                        {oneData.Festpreis ? (
                            <h3>{oneData.Preis},00 EUR</h3>
                        ) : oneData.VB ? (
                            <h3>{oneData.Preis},00 EUR VB</h3>
                        ) : (
                            <h3>Zu Verschenken</h3>
                        )}
                        <div className="describe">
                            <p>Zustand</p>
                            <span>{oneData.Zustand}</span>
                            {/* <p>Marke</p>
                        <span>{oneData.brand}</span> */}
                            <p>Lieferung</p>
                            <span>{oneData.Lieferung ? "ja" : "nein"}</span>
                            <p>Auf Lager</p>
                            <span>{oneData.Anzahl}</span>
                        </div>
                        {token &&
                            (favoritesItem.includes(oneData._id) ? (
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
                        <div>
                            <h3>Produktbeschreibung</h3>
                            <p>{oneData.Beschreibung}</p>
                        </div>
                    </div>
                </section>
            )}
            <FooterEnd />
        </>
    );
};

export default DetailPage;
