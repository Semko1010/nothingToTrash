import AsideFilter from "../../components/asideFilter/AsideFilter";
import { useContext, useState, useEffect } from "react";
import { newToken, newUserId, favorite } from "../../App";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Marktlist from "../marktplatz/Marktlist";

import useSearchItems from "../../hooks/useSearchItems";
import useDataFetch from "../../hooks/useDatafetch";
import { BiLoaderCircle } from "react-icons/bi";
let array = [];
const Wishlist = () => {
    const [test, setTest] = useState();
    const { userId } = useContext(newUserId);
    const { favoritesItem, setFavoritesItem } = useContext(favorite);
    const { token } = useContext(newToken);
    const { data, loading } = useDataFetch();
    const [filteredArr, setFilteredArr] = useState(data);

    useEffect(() => {
        array.length = 0;
        data.forEach((e) => {
            favoritesItem.forEach((item) => {
                if (e._id == item) {
                    array.push(e);
                }
            });
        });
    });
    // * GEHT---------------------------------------------------
    // Zustand Counter
    let countZustandNeu = data.reduce((n, x) => n + (x.Zustand === "neu"), 0);
    let countZustandWieNeu = data.reduce(
        (n, x) => n + (x.Zustand === "Wie neu"),
        0
    );
    let countZustandGebraucht = data.reduce(
        (n, x) => n + (x.Zustand === "gebraucht"),
        0
    );
    let countZustandDefekt = data.reduce(
        (n, x) => n + (x.Zustand === "Defekt"),
        0
    );
    // *--------------------------------------------------------

    // filter function

    // * GEHT-----------------
    // Zustand
    const [filterStatus, setFilterStatus] = useState([]);
    const insertStatusInState = (status) => {
        if (filterStatus.includes(status)) {
            setFilterStatus(filterStatus.filter((item) => item !== status));
        } else {
            setFilterStatus([...filterStatus, status]);
        }
    };

    // * GEHT-----------------
    // Lieferung
    const [filterShipping, setFilterShipping] = useState(null);

    // * GEHT-----------------
    // Rating
    const [filterRating, setFilterRating] = useState([]);
    const insertRatingInState = (status) => {
        if (filterRating.includes(status)) {
            setFilterRating(filterRating.filter((item) => item !== status));
        } else {
            setFilterRating([...filterRating, status]);
        }
    };

    // * GEHT-----------------
    // Preis
    const [filterPrice, setFilterPrice] = useState([0, 500]);

    // * GEHT-----------------
    // Searchbar
    const { searchItems, filteredResults } = useSearchItems(array);

    useEffect(() => {
        // * GEHT-----------------
        // Zustand

        const filteredStatus = filteredResults.filter((item) => {
            if (filterStatus.length <= 0) {
                return item;
            } else {
                return item.Zustand == filterStatus;
            }
        });

        // * GEHT-----------------
        // Lieferung
        const filterShippingResults = filteredStatus.filter((item) => {
            if (filterShipping == null) {
                return item;
            } else {
                return item.Lieferung == filterShipping;
            }
        });
        // * GEHT-----------------
        // Rating
        const filterRatingFunction = filterShippingResults.filter((item) => {
            if (filterRating.length <= 0) {
                return item;
            } else {
                return item.rating == filterRating;
            }
        });

        // * GEHT-----------------
        // Preis
        const filteredAll = filterRatingFunction.filter((item) => {
            if (filterPrice.length <= 0) {
                return item;
            } else {
                return (
                    item.Preis >= filterPrice[0] && item.Preis <= filterPrice[1]
                );
            }
        });

        setFilteredArr(filteredAll);
    }, [
        data,
        filterStatus,
        filterShipping,
        filterRating,
        filterPrice,
        filteredResults,
        favoritesItem,
    ]);
    return (
        <section className="wunschliste-Sec">
            <article className="productsHeader-Art">
                <h1>Diese Artikel hättest du gerne</h1>
                {/* <button onClick={testNew}>Test</button> */}
                <input
                    onChange={(e) => searchItems(e.target.value)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Suche nach Produkt, Kategorie..."
                />
                <NavLink
                    className="btn-primary"
                    to={token ? "/addproduct" : "/login"}
                >
                    Produkt einstellen
                </NavLink>
            </article>
            <article className="articleAndFilterWrap">
                <AsideFilter
                    insertStatusInState={insertStatusInState}
                    setFilterShipping={setFilterShipping}
                    insertRatingInState={insertRatingInState}
                    setFilterPrice={setFilterPrice}
                    countZustandNeu={countZustandNeu}
                    countZustandWieNeu={countZustandWieNeu}
                    countZustandGebraucht={countZustandGebraucht}
                    countZustandDefekt={countZustandDefekt}
                />
                {loading && (
                    <div className="loading-Div">
                        <h2>
                            <BiLoaderCircle className="circle" />
                        </h2>
                    </div>
                )}
                {!loading && <Marktlist loading={loading} data={filteredArr} />}
            </article>
        </section>
    );
};

export default Wishlist;
