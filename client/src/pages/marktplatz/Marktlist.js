import { useContext, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { favorite, newUserId, fav } from "../../App";

import MarktplatzItem from "./MarktplatzItem";

const Marktlist = (props) => {
    const { userId } = useContext(newUserId);
    const { favoritesItem, setFavoritesItem } = useContext(favorite);

    return (
        <div className="marktlist">
            {props.loading && (
                <div className="loading-Div">
                    <h2>
                        <BiLoaderCircle className="circle" />
                    </h2>
                </div>
            )}
            {!props.loading &&
                props.data.map((e, i) => (
                    <MarktplatzItem
                        key={i}
                        id={e._id}
                        Titel={e.Titel}
                        Beschreibung={e.Beschreibung}
                        Bild={e.Bild.convertedImage}
                        Preis={e.Preis}
                        Zustand={e.Zustand}
                        Lieferung={e.Lieferung}
                        Anzahl={e.Anzahl}
                        Festpreis={e.Festpreis}
                        VB={e.VB}
                        fav={favoritesItem.includes(e._id)}
                    />
                ))}
        </div>
    );
};

export default Marktlist;
