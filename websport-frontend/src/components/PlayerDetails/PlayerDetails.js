import React from "react";
import "./PlayerDetails.css";
import {withRouter} from "react-router";
import Quotes from "./Quotes/Quotes";

const PlayerDetails = (props) => {

    if(props.player===null) return <>Player not found</>

    let imagePath = "images/user.png";

    if(props.player && props.player.thumbnail !== null) {
        imagePath = props.player.thumbnail;
    }



    return (
        <div className="container text-light rounded-3 pd-container" >
                <div className={"col-md-12 col-lg-6 text-sm-start "} style={{ float: "left"}}>
                    <a target={"_blank"} href={props.player.thumbnail} style={{zIndex: "1"}}>
                        <img
                            align={"left"}
                            className="rounded-pill"
                            style={{height: "300px", width: "300px"}}
                            alt={props.player.name}
                            src={imagePath}
                        />

                    </a>
                    <h3 className={"p-lg-5 text-light"}><b>{props.player.fullName} </b> <br/>({props.player.name})</h3>

                </div>
                <span className={"col-sm-6 p-5"}>
                    {props.player.description}
                </span>
                <div>
                    Height: <div><b>{props.player.height}</b></div>
                    Born: <div><b>{props.player.birthPlace}, {props.player.birthDate}</b></div>
                </div>
            <Quotes quotes={props.player.playerQuotes}/>
        </div>

    );
};

export default withRouter(PlayerDetails);