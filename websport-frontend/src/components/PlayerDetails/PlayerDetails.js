import React, { useState } from 'react';
import "./PlayerDetails.css";
import {withRouter} from "react-router";
import Quotes from "./Quotes/Quotes";
import dateUtils from "../../utils/dateUtils";

const PlayerDetails = (props) => {
    const player = props.player;

    const [seeMore, setSeeMore] = useState(false);

    if (player === null || player.length) return (<div className={"pd-container"}>Player not found</div>)

    const getDate = dateUtils.getDate;

    return (
        player.length !== 0 ?
            <div className="container text-light rounded-3 pd-container my-3 mx-auto" style={{opacity: "0.8"}}>
                <div className={"col-12 text-center d-flex justify-content-center"}>
                    <div className={"mt-4"}>
                        <a href={player.thumbnail} target={"_blank"}>
                            <img
                                className="rounded-pill mx-auto player-image"
                                style={{height: "300px", width: "300px"}}
                                alt={player.name}
                                title={"Show image..."}
                                src={player.thumbnail ? player.thumbnail : "/images/user.png"}
                            />
                        </a>
                        {player.fullName && <h3 className={"text-light pb-0"}><b>{player.fullName}</b></h3>}
                        {player.name && <h4 className={"text-light py-0"}>({player.name})</h4>}
                    </div>
                </div>

                <div className={"col-12 p-2"}>
                    {player.height && <>Height: <b>{player.height}m</b><br/></>}
                    {player.birthPlace && <>Born: <b>{player.birthPlace}, {getDate(player.birthDate).toDateString()}</b><br/> </>}
                    {player.deathPlace && <>Death: <b>{player.deathPlace}, {getDate(player.deathDate).toDateString()}</b><br/> </>}
                </div>
                {
                    seeMore === true ?
                        player.description && <p>
                            {player.description}
                            <span className="btn btn-link fa fa-angle-up" onClick={() => setSeeMore(!seeMore)}> See less</span>
                        </p>
                    :
                        player.description && <p>
                            {player.description.substr(0, 1500)}
                            <span className="btn btn-link fa fa-angle-down" onClick={() => setSeeMore(!seeMore)}> See more</span>
                        </p>
                }

                <Quotes quotes={player.playerQuotes}/>
            </div>
            :
            <div className="container text-light rounded-3 pd-container mx-auto" style={{opacity: "0.8"}}>
                <h3 className={"p-5 text-light text-center"}>Player not found</h3>
            </div>
    );
};

export default withRouter(PlayerDetails);