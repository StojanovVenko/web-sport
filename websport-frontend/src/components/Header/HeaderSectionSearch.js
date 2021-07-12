import React, {useState} from "react";
import "./Header.css";
import {useHistory, useLocation} from "react-router";
import {Link} from "react-router-dom";
import {categories, sports} from "../../constants/constants";

const HeaderSectionSearch = (props) => {
    const [searchPlayer, setSearchPlayer] = useState("");
    const [searchTeam, setSearchTeam] = useState("");
    const [inputValue, setInputValue] = useState("");

    let category = props.category ? props.category : categories.players;
    const history = useHistory();

    const searchAboutCategory = (cat) => {
        if (cat === categories.players) {
            setInputValue(searchPlayer);
        }
        if (cat === categories.teams) {
            setInputValue(searchTeam);
        }
        props.setCategory(cat);
        history.push("/" + cat.toLowerCase());
    }

    const setSearchString = (value) => {
        setInputValue(value);

        if (category === categories.players) {
            setSearchPlayer(value);
            return;
        }
        if (category === categories.teams) {
            setSearchTeam(value);
        }
    }

    const search = (e) => {
        e.preventDefault()

        if (category === categories.players) {
            props.getPlayerDetails(searchPlayer);
            history.push("/players")
            return;
        }
        if (category === categories.teams) {
            props.getTeamDetails(searchTeam);
            history.push("/teams");
        }
        if (category === categories.sports) {
        }
    }

    const selectSport = (s) => {
        props.selectSport(s);
        history.push("/sports/details");
    }

    return (
        <div id={"header"} className="header_section">
            <div className="container p-2 rounded-pill" style={{backgroundColor: "#2b2a29"}}>
                <div className="containt_main w-75 ml-auto mr-auto">
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}>&times;</a>
                        <Link to={"/home"}>Home</Link>
                        <Link onClick={() => searchAboutCategory(categories.players)} to={"/players"}>Players</Link>
                        <Link onClick={() => searchAboutCategory(categories.teams)} to={"/teams"}>Teams</Link>
                        <Link onClick={() => searchAboutCategory(categories.sports)} to={"/sports"}>Sports</Link>
                        <Link to={"/about"}>About</Link>
                    </div>
                    <span className="toggle_icon" onClick={props.openNav}>
                        {/*<i className="fa fa-align-justify w-100 h-100" />*/}
                        <img width={"38px"} src="images/toggle-icon.png"/>
                    </span>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{category}
                        </button>
                        <div id="categories" className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                            {
                                Object.values(categories).map((c) => {
                                    return <li className="dropdown-item"
                                               onClick={() => searchAboutCategory(c)}>{c}</li>;
                                })
                            }
                        </div>
                    </div>
                    <div className="main">
                        {category !== categories.sports &&
                        <form className="input-group">
                            <input
                                value={inputValue}
                                onChange={(el) => {
                                    setSearchString(el.target.value);
                                    console.log(el.target.value)
                                }
                                }
                                type="text"
                                className="form-control"
                                placeholder={"Search for " + category.substr(0, category.length - 1)}/>
                            <div className="input-group-append">
                                <button
                                    onClick={(e) => search(e)}
                                    className="btn btn-secondary"
                                    type="submit"
                                    style={{backgroundColor: "#f26522", borderColor: "#f26522"}}>
                                    <i className="fa fa-search"/>
                                </button>
                            </div>
                        </form>
                        }
                        {category === categories.sports && props.sport && props.sport.sport &&
                        <div>
                            <p className={"btn-group dropdown  w-100 ml-0"}>
                                <a className="btn btn-secondary" data-toggle="collapse" href="#collapseExample"
                                   role="button"
                                   aria-expanded="false" aria-controls="collapseExample">
                                    {props.sport.sport} <span className={"fa fa-angle-down"}/>
                                </a>

                            </p>
                            <div className="collapse " id="collapseExample">
                                <div id={"h-sports"} className="card card-body">
                                    {
                                        <div className={"row"}>
                                            {
                                                sports.map(sport => {
                                                    return <div onClick={() => {
                                                        document.getElementById("collapseExample").classList.remove("show");
                                                        selectSport(sport);
                                                    }} className={"col-4"}>
                                                        <div >
                                                            <img
                                                                className={"rounded-3"} src={"images/sports/" + sport.imageName}
                                                                alt={"img"}
                                                                width={"20px"} height={"20px"}/>
                                                            {sport.sport}
                                                        </div>

                                                    </div>
                                                })
                                            }
                                        </div>
                                    }</div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderSectionSearch;