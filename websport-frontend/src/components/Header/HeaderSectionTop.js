import React from "react";
import {Link} from "react-router-dom";

const HeaderSectionTop = () => {

    return (
        <div className="container " >
            <div className="header_section_top">
                <div className="row">
                    <div className="col-sm-3 ml-auto mr-auto display-5 text-center text-light">
                        <Link className={"text-decoration-none text-light"} to={"/home"}>WEBSPORT</Link>
                    </div>
                    {/*<div className="col-sm-12">*/}
                    {/*    <div className="custom_menu">*/}
                    {/*        <ul>*/}
                    {/*            <li><a href="/home">Home</a></li>*/}
                    {/*            <li><a href="#">Gift Ideas</a></li>*/}
                    {/*            <li><a href="#">New Releases</a></li>*/}
                    {/*            <li><a href="#">Today's Deals</a></li>*/}
                    {/*            <li><a href="#">About</a></li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default HeaderSectionTop;