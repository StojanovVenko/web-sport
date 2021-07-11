import React from "react";
import "./Teams.css";

const Teams = (props) => {
    const team = props.team;

    if(team === null) return <div id={"teams"} className={"content_blank"}>
        <h1>You need to select team</h1>
    </div>;

    return (<div id={"teams"}>
        You have choosen team
    </div>);
};

export default Teams;