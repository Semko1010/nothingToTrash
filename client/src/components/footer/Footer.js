import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>
                nothingtotrash - eine online Plattform um Müll zu <br />{" "}
                vermeiden.
            </p>
            <NavLink className="btn-primary" to="/register">
                Registriere Dich
            </NavLink>
            <img src="/img/ring.png" alt="Twitter" className="ring" />
        </footer>
    );
};

export default Footer;
