import React, {useState} from "react";
import {useHistory} from "react-router";

const PlayerTeam = (props) => {
    const team = props.team;

    const [seeMore, setSeeMore] = useState(false);
    const history = useHistory();

    const getTeamDetails = () => {
        console.log("aaaaaaaaaaaaaaaa " + team.uri.split("/")[team.uri.split("/").length - 1]);
        props.getTeamDetails(team.uri.split("/")[team.uri.split("/").length - 1]);
        history.push("/teams#");
    };

    return <div className="card w-50 ml-auto mr-auto mb-4">
        <div className="card-body">
            <h5 className="card-title border-bottom border-danger">{team.label}</h5>
            <p className="card-text text-dark">
                {(team.description.length > 160 && !seeMore) && <>
                    {team.description.substr(0, 160)}
                    <span className={" font-weight-bold"}
                          onMouseOver={(el) => el.target.style.cursor = "pointer"}
                          onClick={() => setSeeMore(true)}>... read more </span></>
                }
                {(team.description.length > 160 && seeMore) && <>
                    {team.description}
                    <span className={" font-weight-bold"}
                          onMouseOver={(el) => el.target.style.cursor = "pointer"}
                          onClick={() => setSeeMore(false)}>... read less </span>
                </>}
                {team.description <= 160 && team.description}
            </p>
            <button className="btn btn-outline-ws btn-block"
                    onClick={() => getTeamDetails()}
            >See more info about {
                team.label ? team.label: "this team"
            }</button>
        </div>
    </div>
};

export default PlayerTeam;