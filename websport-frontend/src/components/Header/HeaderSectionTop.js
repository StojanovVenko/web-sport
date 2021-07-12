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
                </div>
            </div>
        </div>
    );
}

export default HeaderSectionTop;