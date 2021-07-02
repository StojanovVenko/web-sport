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
            sports.map((sportList, i) => {
                return <div className={"row"}>
                    {sportList.map(s => {
                        return <div onClick={() => selectSport(s)} className={"col-sm-4 col-md-2"}>
                            <img
                                onMouseOver={(el) => {
                                    el.target.classList.toggle("sport-hover-icon")
                                }}
                                onMouseOut={(el) => {
                                    el.target.classList.toggle("sport-hover-icon")
                                }}
                                className={"rounded-3"} src={"images/sports/" + s.imagePath} alt={"img"}
                                width={"100px"} height={"100px"}/><br/>
                            {s.sport.toString()}
                        </div>

                    })
                    }
                </div>
            })
        }
    </div>);
};

export default Sports;