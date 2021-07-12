import React from "react";
import "./Teams.css";
import dateUtils from "../../utils/dateUtils";

const Teams = (props) => {
    const team = props.team;
    const getDate = dateUtils.getDate;

    if (team === null) return <div id={"teams"} className={"content_blank"}>
        <h1>You need to select team</h1>
    </div>;

    return (
        <div id={"teams"} className="container text-light rounded-3 pd-container my-3 mx-auto text-left" style={{opacity: "0.8"}}>
            {team.label && <>
                <div className={"col-12 text-center d-flex justify-content-center"}>
                    <div className={"mt-4 pt-3 pb-3"}>
                        <h3 className={" pb-0 border-bottom border-danger border-3 text-success"}>{team.label}</h3>
                    </div>
                </div>
                <hr/>
            </>
            }
            {team.clubName && <div>
                Clubname: <span className={"font-weight-bold"}>{team.clubName}</span>
            </div>
            }
            {
                team.fullName && <div>
                    Club full name: <span className={"font-weight-bold"}>{team.fullName}</span>
                </div>
            }
            {team.description && <><p>Descrtiption: <span className={"font-weight-bold"}>{team.description}</span></p>
                <hr/>
            </>}
            {team.formationDate &&
            <div>Formation date: <span className={"font-weight-bold"}> {getDate(team.formationDate).toDateString()}</span></div>}
            {team.groundName && <div>
                Ground: <span className={"font-weight-bold"}>{team.groundName}</span>
            </div>}
            {team.groundDescription && <div>
                Ground description: <span className={"font-weight-bold"}>{team.groundDescription}</span>
            </div>}
            {team.chairmanName && <div>
                {team.chairmanTitle ? <span>{team.chairmanTitle}: </span>: "Chairman name: "}
                <u>{team.chairmanName}</u> <span>{team.chairmanDescription && <span>( {team.chairmanDescription} )</span>}</span>
            <hr/></div>
            }
            {team.managerName && <div>
                {team.managerTitle ? <span>{team.managerTitle}: </span>: "Manager name: "}
                <u>{team.managerName}</u> <span>{team.managerDescription && <span>( {team.managerDescription} )</span>}<hr/></span>
            </div>

            }
        </div>);
};

export default Teams;