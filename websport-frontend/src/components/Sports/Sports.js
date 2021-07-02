import React, {useState} from "react";
import {sports} from "../../constants";
import "./Sport.css";
import {useHistory} from "react-router";

const Sports = (props) => {
    const [selectedSport, setSelectedSport] = useState({sport: "Choose sport"});
    const history = useHistory();

    function selectSport(s) {
        props.selectSport(s);
        history.push("/sports/details");
    }

    return (<div id={"sports"} className={"container"}>
        {

            <div className={"row"}>
                {
                    sports.map(sport => {
                        return <div onClick={() => selectSport(sport)} className={"col-sm-4 col-md-2"}>
                            <div className={"sport-item bg-white my-2"}>
                                <img
                                    className={"rounded-3"}
                                    src={"images/sports/" + sport.imagePath}
                                    alt={"img"}
                                    width={"100px"} height={"100px"}/><br/>
                                {sport.sport}
                            </div>

                        </div>
                    })
                }
            </div>

        }
    </div>);
};

export default Sports;