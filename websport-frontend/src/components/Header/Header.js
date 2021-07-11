import React from "react";
import HeaderSectionTop from "./HeaderSectionTop";
import HeaderSectionSearch from "./HeaderSectionSearch";
import "./Header.css";
import {withRouter} from "react-router";

const Header = (props) => {

    return (<div className={"opacity"}>
            <HeaderSectionTop/>
            <HeaderSectionSearch closeNav={props.closeNav}
                                 openNav={props.openNav}
                                 getPlayerDetails={props.getPlayerDetails}
                                 setCategory={props.setCategory}
                                 category={props.category}
                                 value={props.value}
                                 sport={props.sport}
                                 selectSport={props.selectSport}
                                 getTeamDetails={props.getTeamDetails}/>
        </div>
    );
}

export default withRouter(Header);