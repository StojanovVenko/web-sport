import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {


    return (
        <div>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="col-sm-3 ml-auto mr-auto display-5 text-center text-light">
                        <Link className={"text-decoration-none text-light"} to={"/home"}>WEBSPORT</Link>
                    </div>

                    <div className="footer_menu">
                        <ul>
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/players"}>Players</Link></li>
                            <li><Link to={"/teams"}>Teams</Link></li>
                            <li><Link to={"/sports"}>Sports</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                    <div className="location_main">Help Line Number : <a href="#">+38974 202 269, +38970 581 901</a></div>
                </div>
            </div>
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free
                        html Templates</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;