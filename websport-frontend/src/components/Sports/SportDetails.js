import React from "react";
import SportPlayers from "./SportPlayers";

const SportDetails = (props) => {
    if (props.sport === null) return <div>
        You need to select sport!
    </div>

    const sport = props.sport;
    const sportImageURL = sport.thumbnail ?
        sport.thumbnail :
        props.image;


    return (<div className={"container text-light rounded-3 pd-container my-3 mx-auto"}>
        {sport.thumbnail && <img src={sport.thumbnail} style={{width: "100%", height: "400px"}}/>}
        <div>Label: <b>{sport.label}</b></div>
        {sport.comment && <div>Comment: <b>{sport.comment}</b></div>}
        {sport.description && <div>Description: <b>{sport.description}</b></div>}
        {sport.comment && <div>Comment: <b>{sport.comment}</b></div>}
        {sport.sportGoverningBody && <div>Sport governing body: <b>{sport.sportGoverningBody}</b></div>}
        {sport.players && <SportPlayers players={sport.players}/>}
        </div>);
        };

export default SportDetails;