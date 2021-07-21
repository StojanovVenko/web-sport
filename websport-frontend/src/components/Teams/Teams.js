import React, {useState} from "react";
import "./Teams.css";
import dateUtils from "../../utils/dateUtils";
import PlayersPagination from "../Players/PlayersPagination";

const Teams = (props) => {
    const team = props.team;
    const getDate = dateUtils.getDate;

    if (team === null) return <div id={"teams"} className={"content_blank"}>
        <h1>You need to select team</h1>
    </div>;

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
            {team.clubName && <div>
                <span className={"text-ws"}>Clubname:</span> <span className={"font-weight-bold"}>{team.clubName}</span>
            </div>}
            {team.fullName && <div><span className={"text-ws"}>
                Club full name: </span><span className={"font-weight-bold"}>{team.fullName}</span>
            </div>}
            {team.description && <><p><span className={"text-ws"}>Descrtiption:</span> <span
                className={"font-weight-bold"}>{team.description}</span></p>
                <hr/>
            </>}
            {team.formationDate &&
            <div><span className={"text-ws"}>Formation date:</span> <span
                className={"font-weight-bold"}> {getDate(team.formationDate).toDateString()}</span></div>}
            {team.groundName && <div>
                <span className={"text-ws"}>Ground:</span> <span className={"font-weight-bold"}>{team.groundName}</span>
            </div>}
            {team.groundDescription && <div>
                <span className={"text-ws"}>Ground description:</span> <span
                className={"font-weight-bold"}>{team.groundDescription}</span>
            </div>}
            {team.chairmanName && <div>
                {team.chairmanTitle ? <span className={"text-ws"}>{team.chairmanTitle}: </span> : "Chairman name: "}
                <u>{team.chairmanName}</u> <span>{team.chairmanDescription &&
            <span>( {team.chairmanDescription} )</span>}</span>
                <hr/>
            </div>}
            {team.managerName && <div>
                {team.managerTitle ? <span className={"text-ws"}>{team.managerTitle}: </span> : "Manager name: "}
                <u>{team.managerName}</u> <span>{team.managerDescription && <span>( {team.managerDescription} )</span>}
                <hr/></span>
            </div>}
            {team.nicknames && <div><h4 className={"text-ws"}>Nicknames</h4>
                <ul>
                    {team.nicknames.map(n => {
                        return <li>{n}</li>
                    })}
                </ul>
                <hr/>
            </div>}
            {team.players && <PlayersPagination players={team.players}
                                                getPlayerDetails={props.getPlayerDetails}
                                                setCategory={props.setCategory}/>}
        </div>);
};

export default Teams;