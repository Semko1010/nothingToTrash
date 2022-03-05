import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import FooterEnd from "../../components/footerEnd/FooterEnd";
import { useContext } from "react";
import { newToken } from "../../App";

const Home = () => {
    const { token, setToken } = useContext(newToken);

    return (
        <>
            <section className="home-Sec">
                <article className="header-Art">
                    <div>
                        <h1>Hilf mit die Umwelt zu schützen</h1>
                        <p>
                            Abfälle bedrohen Vögel, Delfine und Co. Mehr als
                            zehn Millionen Tonnen Abfälle gelangen jährlich in
                            die Ozeane. Sie kosten Abertausende Meerestiere das
                            Leben. Seevögel verwechseln Plastik mit natürlicher
                            Nahrung, Delfine verfangen sich in alten
                            Fischernetzen. Hilf mit Müll zu reduzieren und
                            trashnothing.
                        </p>
                        <NavLink
                            className="btn-primary btn"
                            to={token ? "/addproduct" : "/login"}
                        >
                            Starte jetzt!
                        </NavLink>
                    </div>
                </article>
                <article className="picsGrid-Art">
                    <h2>Lebe eCommerce mal anders</h2>
                    <div className="art1">
                        <img src="img/gridImg1.svg" alt="gridImg1" />
                        <h3>Verkaufen statt wegwerfen</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Risus faucibus egestas neque, quis nunc in
                            turpis cursus eget.
                        </p>
                    </div>
                    <div className="art1">
                        <img src="img/gridImg2.svg" alt="gridImg1" />
                        <h3>Verschenke und Schütze</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Risus faucibus egestas neque, quis nunc in
                            turpis cursus eget.
                        </p>
                    </div>
                    <div className="art1">
                        <img src="img/gridImg3.svg" alt="gridImg1" />
                        <h3>Der Umwelt zuliebe</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Risus faucibus egestas neque, quis nunc in
                            turpis cursus eget.
                        </p>
                    </div>
                </article>
                <article className="blueBack-Art">
                    <div className="blueBackFlex-Div">
                        <img src="img/blueImg1.png" alt="blueImg1" />
                        <div>
                            <h3>Ohne Limits</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Risus faucibus egestas neque,
                                quis nunc in turpis cursus eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Risus faucibus egestas neque, quis nunc in
                                turpis cursus eget.
                            </p>
                            <a className="btn-primary" href="/">
                                Zur Dokumentation
                            </a>
                        </div>
                    </div>
                    <div className="blueBackFlex-Div">
                        <div>
                            <h3>Kenn deine Community</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Risus faucibus egestas neque,
                                quis nunc in turpis cursus eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Risus faucibus egestas neque, quis nunc in
                                turpis cursus eget.
                            </p>
                            <a className="btn-primary" href="/">
                                Zur Dokumentation
                            </a>
                        </div>
                        <img src="img/blueImg2.png" alt="blueImg2" />
                    </div>
                </article>
                <article className="people-Art">
                    <h2>Von echten Menschen unterstützt</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus faucibus egestas neque, quis nunc in turpis cursus
                        eget.
                    </p>
                    <img src="img/people.svg" alt="people" />
                </article>
            </section>
            <Footer />
            <FooterEnd />
        </>
    );
};

export default Home;
