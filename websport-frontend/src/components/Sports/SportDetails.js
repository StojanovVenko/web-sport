import React, { useState } from 'react';
import SportPlayers from "./SportPlayers";

const SportDetails = (props) => {

    const [seeMore, setSeeMore] = useState(false);


    if (props.sport === null) return <div>
        You need to select sport!
    </div>

    const sport = props.sport;
    const sportImageURL = sport.thumbnail ?
        sport.thumbnail :
        props.image;


    return (<div className={"container text-light row rounded-3 pd-container my-3 mx-auto"}>
        <div className={"col-12 text-center d-flex justify-content-center my-2"}>
            <div>
                <h3 className={"text-light pb-0 my-2"}><b className={"border-bottom border-danger border-3 text-success"}>{sport.label.toUpperCase()}</b></h3>
                {sport.thumbnail && <a href={sport.thumbnail} target={"_blank"}>
                    <img
                        className="mx-auto player-image my-1 rounded"
                        title={"Show image..."}
                        style={{height: "100%", width: "auto"}}
                        alt={"Sport image"}
                        src={sport.thumbnail}
                    />
                </a>}
            </div>
        </div>
        {/*<div className={"col-12 mt-5"}>*/}
        {/*    <div>Label: <b>{sport.label}</b></div>*/}
        {/*</div>*/}
        <div className={"col-12 mt-5"}>
            <p>
                {sport.comment && <div>Comment: <b>{sport.comment}</b></div>}
            </p>
        </div>
        <div className={"col-12"}>
            {
                seeMore === true ?
                    <p>
                        {sport.description && <div>Description:
                            <span className={"font-weight-bold"}>{sport.description}</span>
                            <span className="btn btn-link fa fa-angle-up" onClick={() => setSeeMore(!seeMore)}> See less</span>
                        </div>}
                    </p>
                    :
                    <p>
                        {sport.description && <div>Description:
                            <span className={"font-weight-bold"}>{sport.description.substr(0, 1500)}</span>
                            <span className="btn btn-link fa fa-angle-down" onClick={() => setSeeMore(!seeMore)}> See more</span>
                        </div>}
                    </p>
            }
        </div>
        <div className={"col-12"}>
            <p>
                {sport.sportGoverningBody && <div>Sport governing body: <span className={"font-weight-bold"}>{sport.sportGoverningBody}</span></div>}
            </p>
        </div>
        <div className={"col-12"}>
            {sport.players && <SportPlayers players={sport.players}/>}
        </div>
    </div>);
};

export default SportDetails;