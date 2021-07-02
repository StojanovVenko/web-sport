import React, {useState} from "react";
import {sports} from "../../constants";
import "./Sport.css";

const Sports = () => {
    const [selectedSport, setSelectedSport] = useState({sport: "Choose sport"});

    return (<div id={"sports"} className={"container"}>
        {
            sports.map((sportList, i) => {
                return <div className={"row"}>
                    {sportList.map(s => {
                        return <div className={"col-sm-4 col-md-2"}>
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