import React, {useState} from "react";
import "./Teams.css";
import dateUtils from "../../utils/dateUtils";
import PlayersPagination from "../Players/PlayersPagination";

const Teams = (props) => {
    const team = props.team;
    const getDate = dateUtils.getDate;

    if (team === null) {
        return <div className={"blank_content"}>
            <div className="container text-light rounded-3 pd-container mx-auto" style={{opacity: "0.8"}}>
                <h3 className={"p-5 text-light text-center "}>Search for team above!</h3>
            </div></div>
    }

    return (
        <div id={"teams"} className="container text-light rounded-3 pd-container my-3 mx-auto text-left"
             style={{opacity: "0.8"}}>
            {team.label && <>
                <div className={"col-12 text-center d-flex justify-content-center"}>
                    <div className={"mt-4 pt-3 pb-3"}>
                        <h2 className={" pb-0 border-bottom border-danger border-3 text-success"}>{team.label}</h2>
                    </div>
                </div>
                <hr className={"w-75 ml-auto mr-auto mt-5"}/>
            </>}
            {team.clubName &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Clubname:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.clubName}
                    </div>
                </div>}
            {team.fullName &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Club full name:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.fullName}
                    </div>
                </div>
            }
            {team.description &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Descrtiption:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.description}
                    </div>
                </div>
            }
            {team.formationDate &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Formation date:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {getDate(team.formationDate).toDateString()}
                    </div>
                </div>
            }
            {team.groundName &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Ground:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.groundName}
                    </div>
                </div>
            }
            {team.groundDescription &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Ground description:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.groundDescription}
                    </div>
                </div>
            }
            {team.chairmanName &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        {team.chairmanTitle ? team.chairmanTitle : "Chairman name: "}
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.chairmanDescription}
                    </div>
                </div>
            }
            {team.managerName &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        {team.managerTitle ? team.managerTitle : "Manager name: "}
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        {team.managerName}
                    </div>
                </div>
            }
            {team.nicknames &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Nicknames:
                    </div>
                    <div className={"col-10 font-weight-bold"}>
                        <ul className={"p-0"}>
                            {team.nicknames.map(n => {
                                return <li>{n}</li>
                            })}
                        </ul>
                    </div>
                </div>
            }
            <hr className={"w-75 ml-auto mr-auto mt-5"}/>
            {team.players && team.players.length !==0 && <>
                <h2 id={"sp"} className={"text-ws text-center p-2"}>Players in this team</h2>
                <PlayersPagination players={team.players}
                                   getPlayerDetails={props.getPlayerDetails}
                                   setCategory={props.setCategory}/>
            </> }
        </div>
    );
};

export default Teams;