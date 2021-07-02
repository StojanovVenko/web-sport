import React from "react";
import "./PlayerDetails.css";
import {withRouter} from "react-router";
import Quotes from "./Quotes/Quotes";

const PlayerDetails = (props) => {

    console.log(props.player, "PLAYER")

    if(props.player === null || props.player.length) return (<div className={"pd-container"}>Player not found</div>)

    function getDate(date) {
        return new Date(date)
    }

    return (
        props.player.length !== 0 ?
            <div className="container text-light rounded-3 pd-container my-3 mx-auto" style={{opacity: "0.8"}} >
                <div className={"col-12 text-center d-flex justify-content-center"}>
                    <div className={"mt-4"}>
                        <a href={props.player.thumbnail} target={"_blank"}>
                            <img
                                className="rounded-pill mx-auto"
                                style={{height: "300px", width: "300px"}}
                                alt={props.player.name}
                                src={props.player.thumbnail}
                            />
                        </a>
                        <h3 className={"text-light pb-0"}><b>{props.player.fullName}</b></h3>
                        <h4 className={"text-light py-0"}>({props.player.name})</h4>
                    </div>
                </div>

                <div className={"col-12 p-2"}>
                    Height: <b>{props.player.height}m</b><br/>
                    Born: <b>{props.player.birthPlace}, {getDate(props.player.birthDate).toDateString()}</b>
                </div>
                <div className={"col-12 p-2"}>
                    {props.player.description}
                </div>

                <Quotes quotes={props.player.playerQuotes}/>
            </div>
            :
            <div className="container text-light rounded-3 pd-container mx-auto" style={{opacity: "0.9"}}>
                <h3 className={"p-5 text-light text-center"}>Player not found</h3>
            </div>
    );
};

export default withRouter(PlayerDetails);