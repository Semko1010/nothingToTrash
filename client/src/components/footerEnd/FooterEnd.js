import { NavLink, Link } from "react-router-dom";

const FooterEnd = () => {
    return (
        <div className="footerEnd">
            
            <a href="http://www.twitter.com" className="logo">
                <img src="/img/Twitter.png" alt="zu" className="last" />
            </a>
            <a href="http://www.facebook.de" className="logo">
                <img src="/img/facebook.png" alt="zu" className="last" />
            </a>
            <a href="http://www.supercode.de" className="logo">
                <img src="/img/Union.png" alt="zu" className="last" />
            </a>
            <a href="http://www.instragram.de" className="logo">
                <img src="/img/instragram.png" alt="zu" className="last" />
            </a>
            <div>
                <p>
                    COPYRIGHT nothingtotrash 2021 - TERMS & CONDITIONS  PRIVACY POLICY
                </p>
            </div>
        </div>
    );
};

export default FooterEnd;
