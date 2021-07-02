import React, {useState} from "react";
import "./Header.css";
import {useHistory, useLocation} from "react-router";
import {Link} from "react-router-dom";
import {categories} from "../../constants";

const HeaderSectionSearch = (props) => {
    const [searchPlayer, setSearchPlayer] = useState("");
    const [searchTeam, setSearchTeam] = useState("");
    const [searchSport, setSearchSport] = useState(props.choosenSport? props.choosenSport : {sport: "Choose sport"});
    const [inputValue, setInputValue] = useState("");

    // category can be players, teams, or sports. By default is players
    const [category, setCategory] = useState(props.category ? props.category : "Players")
    const history = useHistory();
    const location = useLocation();

    const searchAboutCategory = (cat) => {
        console.log(location)
        if(cat === category) return;

        setCategory(cat);
        if(cat === categories[0]) {
            setInputValue(searchPlayer);
        }
        if(cat === categories[1]) {
            setInputValue(searchTeam);
        }
        if(cat === categories[2]) {
            setInputValue(searchSport);
        }
        console.log(cat, cat.toLowerCase())
        history.push("/" + cat.toLowerCase());

    }

    const setSearchString = (value) => {
        setInputValue(value);
        if(category === categories[0]) {
            setSearchPlayer(value);
            return;
        }
        if(category === categories[1]) {
            setSearchTeam(value);
            return;
        }
        if(category === categories[2]) {
            setSearchSport(value);
        }
    }

    const search = (e) => {
        e.preventDefault()

        if(category === categories[0]) {
            props.getPlayerDetails(searchPlayer);
            history.push("/players")
            return;
        }
        if(category === categories[1]) {
            return;
        }
        if(category === categories[2]) {
        }
    }

    // searchAboutCategory(props.category);

    return (
        <div className="header_section" >
            <div className="container p-2 rounded-pill" style={{opacity: "0.9", backgroundColor: "#252525"}}>
                <div className="containt_main w-75 ml-auto mr-auto" >
                    <div id="mySidenav" className="sidenav" >
                        <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}>&times;</a>
                        <Link to={"/players"}>Players</Link>
                        <Link to={"/teams"}>Teams</Link>
                        <Link to={"/sports"}>Sports</Link>
                        <Link to={"#"}>Universities</Link>
                    </div>
                    <span className="toggle_icon" onClick={props.openNav}>
                        <img width={"38px"} src="images/toggle-icon.png"/>
                    </span>
                    <div className="dropdown" >
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{category}
                        </button>
                        <div id="categories" className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                            {
                                categories.map((c) => {
                                    return <li className="dropdown-item" onClick={() => searchAboutCategory(c)}>{c}</li>;
                                })
                            }
                        </div>
                    </div>
                    <div className="main">
                        {category !== categories[2] &&
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
                                placeholder={"Search for " + category.substr(0, category.length-1)}/>
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
                        {category === categories[2] &&
                        <div className="btn-group dropdown  w-100">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                {searchSport.sport}
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Regular link</a>
                                <a className="dropdown-item" href="#">Active link</a>
                                <a className="dropdown-item" href="#">Another link</a>
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