import FooterEnd from "../../components/footerEnd/FooterEnd";
import Footer from "../../components/footer/Footer";




const Ueberuns = () => {
    return (
        <>
            <section className="ueberuns-Sec">
                <div className="content">
    
                <h1>Unser Projekt</h1>
                    
                    <article>
                        <p>
                        ”Nothingtotrash” ist eine Website um gebrauchte Gegenstände zu verschenken oder für wenig Geld zu Verkaufen. Somit können Nutzer nachhaltiger wirtschaften und noch funktionale Gegenstände weitergeben ohne dass sie unnötig zu Müll werden.
                        </p>
                    </article>
                </div>
    
                <img src="https://cdn.pixabay.com/photo/2020/06/24/05/29/tree-5334822_1280.png" alt="" />                
                
            </section>
            <h2>NothingToTrash Team</h2>
            <section className="card">
            
                <div className="player">
                    <img  src="https://www.pokedexia.net/images/3/34/PGL-007.png" alt="" />
                    <h2>Annabelle Backend Developerin</h2>
                    <p>Git-Queen</p>
                    <p>Heroku-Schildmaid</p>
                    <p>Orga-Herrin</p>
                    <p>Backend halt</p>
                </div>
                <div className="player " >
                    <img src="https://www.pokewiki.de/images/thumb/4/48/Sugimori_006m2.png/250px-Sugimori_006m2.png" alt="" />
                    <h2>Akhim Frontend Developer</h2>
                    <p>MediaQuerie-Master</p>
                    <p>Styling</p>
                    <p>Überuns</p>
                    <p>Frontend halt</p>
                </div>
                <div className="player" >
                    <img  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" alt="" />
                    <h2>Max Frontend Developer</h2>
                    <p>Chef vom Frontend</p>
                    <p>Schnittstelle Frontend/Backend</p>
                    <p>Ordnerstruktur</p>
                    <p>Frontend halt</p>
                </div>
                <div className="player">
                    <img src="https://www.pokedexia.net/images/9/9c/PGL-202.png" alt="" />
                    <h2>Semir Backend Developer</h2>
                    <p>Datenbank-Chef</p>
                    <p>Schnittstelle Frontend/Backend</p>
                    <p>Testing</p>
                    <p>Backend halt</p>
                </div>
            </section>
            <Footer />
            <FooterEnd />        
        </>
    );
};
export default Ueberuns;
