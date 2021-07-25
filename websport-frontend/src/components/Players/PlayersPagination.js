import React, {useState, useEffect} from "react";
import Pagination from "../Pagination/pagination";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import {useHistory} from "react-router";
import {categories} from "../../constants/constants";
import {Link} from "react-router-dom";

const PlayersPagination = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [players, setPlayers] = useState(props.players.slice(0, 8));
    const [currPlayer, setCurrPlayer] = useState();
    const history = useHistory();
    const [pagination, setPagination] = useState({
        page: 0,
        pageSize: 8,
        totalPages: props.players ? props.players.length / 10 : 0,
    });

    const getNewPage = (e) => {
        setPlayers(props.players.slice(e.selected * pagination.pageSize, e.selected * pagination.pageSize + pagination.pageSize))
        setPagination({
            page: e.selected,
            pageSize: pagination.pageSize,
            totalPages: pagination.totalPages
        });
    }

    const fetchDataForPlayer = () => {
        props.getPlayerDetails(currPlayer.uri);
        props.setCategory(categories.players);
        history.push("/players");
    }

    if (showDetails) return <div id={"pdis"} className={"row mb-5"}>

        <PlayerDetails player={currPlayer}/>
        <a onClick={() => setShowDetails(false)}
           className={"btn btn-ws w-75 ml-auto mr-auto"}
           href={"#sp"}>Back</a>
        <Link onClick={() => fetchDataForPlayer()} to={"/players"}
              className={"mt-3 w-75 ml-auto mr-auto btn btn-outline-ws"}>
            Search all about {currPlayer.name ? currPlayer.name : "this player"}</Link>
        <hr className={"w-75 ml-auto mr-auto mt-5"}/>
    </div>

    return <div className={"row mb-5 mt-3"}>
        {pagination.totalPages > 1 && <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            getNewPage={getNewPage}
            showDetails={getNewPage}
            message="Нема играчи"/>
        }
        {players.map(p => {
            return <div className={"col-sm-6 col-md-4 col-lg-3 mb-5"}>
                <div className="card w-75 ml-auto mr-auto" style={{minHeight: "500px"}}>
                    <img src={p.thumbnail ? p.thumbnail : "../images/user.png"}
                         className="card-img-top"
                         alt="..."
                         style={{width: "100%", height: "150px"}}/>
                    <div className="card-body">
                        {p.name && <h5 className="card-title">{p.name}</h5>}
                        {!p.name && p.fullName && <h5>{p.fullName}</h5>}
                        <p className="card-text text-dark">{p.description && p.description.substr(0, 120)}</p>
                    </div>
                    <div className={"card-footer"}>
                        <a onClick={() => {
                            setCurrPlayer(p);
                            setShowDetails(true);
                        }}
                           href={"#pdis"}
                           className="btn btn-outline-ws">Read more</a>
                    </div>
                </div>
            </div>
        })}
        {pagination.totalPages > 1 && <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            getNewPage={getNewPage}
            showDetails={getNewPage}
            message="Нема играчи"/>
        }
    </div>
}

export default PlayersPagination;