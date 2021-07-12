import React from "react";
import "./Teams.css";
import dateUtils from "../../utils/dateUtils";
import PlayersPagination from "../Players/PlayersPagination";
import SportDetails from "../Sports/SportDetails";

const Teams = (props) => {
    const team = props.team;
    const getDate = dateUtils.getDate;
    console.log(team)

    if (team === null) {
        return <div id={"teams"} className={"content_blank"}>
            <h1>You need to select team</h1>
        </div>;
    }

    return (
        <div id={"teams"} className="container text-light rounded-3 pd-container my-3 mx-auto text-left"
             style={{opacity: "0.8"}}>
            {team.label && <>
                <div className={"col-12 text-center d-flex justify-content-center"}>
                    <div className={"mt-4 pt-3 pb-3"}>
                        <h3 className={" pb-0 border-bottom border-danger border-3 text-success"}>{team.label}</h3>
                    </div>
                </div>
                <hr/>
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
                        {team.chairmanDescription}
                    </div>
                </div>
            }
            {team.nicknames &&
                <div className={"row my-1"}>
                    <div className={"col-2 text-ws"}>
                        Nicknames
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
            {team.players && <PlayersPagination players={team.players}
                                                getPlayerDetails={props.getPlayerDetails}
                                                setCategory={props.setCategory}/>}
        </div>
    );
};

export default Teams;