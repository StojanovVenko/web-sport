import React, {useState} from "react";
import {sports} from "../../constants/constants";
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

            <div className={"row pb-100 mb-5"}>
                {
                    sports.map(sport => {
                        return <div onClick={() => selectSport(sport)} className={"col-sm-4 col-md-2"}>
                            <div className={"sport-item bg-white my-2"}>
                                <img
                                    className={"rounded-3"}
                                    src={"images/sports/" + sport.imageName}
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