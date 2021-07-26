import React, {useState} from 'react';
import "./PlayerDetails.css";
import {withRouter} from "react-router";
import Quotes from "./Quotes/Quotes";
import dateUtils from "../../utils/dateUtils";
import PlayerTeam from "./PlayerTeam/PlayerTeam";

const PlayerDetails = (props) => {
        const player = props.player;
        const [seeMore, setSeeMore] = useState(false);

        const checkPlayer = (p) => {
            return !(p.birthDate === null &&
                p.birthPlace === null &&
                p.comment === null &&
                p.deathDate === null &&
                p.deathPlace === null &&
                p.description === null &&
                p.fullName === null &&
                p.height === null &&
                p.name === null &&
                p.thumbnail === null);

        }


        if (player !== null && !checkPlayer(player)) {
            return (
                <div className={"blank_content"}>
                    <div className="container text-light rounded-3 pd-container mx-auto" style={{opacity: "0.8"}}>
                        <h3 className={"p-5 text-light text-center"}>Player not found!</h3>
                    </div>
                </div>
            )
        }

        const getDate = dateUtils.getDate;


        return (
            player && player.length !== 0 ?
                <div className="container text-light rounded-3 pd-container my-3 mx-auto pb-100" style={{opacity: "0.8"}}>
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
                            {player.fullName &&
                            <h3 className={"text-light pb-0 text-ws"}><b className={"text-ws"}>{player.fullName}</b></h3>}
                            {player.name && <h4 className={"text-light py-0 text-ws"}>({player.name})</h4>}
                        </div>
                    </div>

                    <div className={"col-12 p-2"}>
                        {player.height &&
                        <div className={"row"}>
                            <div className={"col-2 text-ws"}>Height:</div>
                            <div className={"col-10"}><b>{player.height}m</b></div>
                        </div>
                        }
                        {player.birthPlace &&
                        <div className={"row"}>
                            <div className={"col-2 text-ws"}>Born:</div>
                            <div className={"col-10"}>
                                <b>{player.birthPlace}, {getDate(player.birthDate).toDateString()} </b>
                                (age {new Date(Date.now()).getFullYear() - new Date(player.birthDate).getFullYear()} years)
                            </div>
                        </div>
                        }
                        {player.deathPlace &&
                        <div className={"row"}>
                            <div className={"col-2 text-ws"}>Death:</div>
                            <div className={"col-10"}><b>{player.deathPlace}, {getDate(player.deathDate).toDateString()}</b>
                            </div>
                        </div>
                        }
                    </div>
                    {
                        seeMore === true ?
                            player.description && <div className={"col-12 p-2"}>
                                <div className={"row"}>
                                    <div className={"col-2 text-ws"}>
                                        Description:
                                    </div>
                                    <div className={"col-10"}>
                                        {player.description}
                                        <span className="btn btn-link fa fa-angle-up" onClick={() => setSeeMore(!seeMore)}> See less</span>
                                    </div>
                                </div>
                            </div>
                            :
                            player.description && <div className={"col-12 p-2"}>
                                <div className={"row"}>
                                    <div className={"col-2 text-ws"}>
                                        Description:
                                    </div>
                                    <div className={"col-10"}>
                                        {player.description.substr(0, 1500)}
                                        {player.description.length > 1500 &&
                                        <span className="btn btn-link fa fa-angle-down" onClick={() => setSeeMore(!seeMore)}> See more</span>}
                                    </div>
                                </div>
                            </div>
                    }
                    <hr className={"w-75 ml-auto mr-auto mt-5"}/>
                    {player.playerQuotes && player.playerQuotes.length !== 0 && <>
                        <Quotes quotes={player.playerQuotes}/>
                        <hr className={"w-75 ml-auto mr-auto mt-5"}/>
                    </>
                    }
                    {player.teams && player.teams.length !== 0 && <>
                        <h2 className={"text-ws text-center p-2"}>Teams</h2>
                        {player.teams.map(t => <PlayerTeam team={t}
                                                           getTeamDetails={props.getTeamDetails}/>)
                        }
                    </>}
                </div>
                :
                <div className={"bg-ws"}>
                    {/*<div className="container text-light rounded-3 pd-container mx-auto" style={{opacity: "0.8"}}>*/}
                    {/*    <h3 className={"p-5 text-light text-center "}>Search for player above!</h3>*/}
                    {/*</div>*/}
                </div>
        );
    }
;

export default withRouter(PlayerDetails);