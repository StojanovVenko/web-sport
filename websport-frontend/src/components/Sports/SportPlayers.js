import React, {useState} from "react";
import Pagination from "../Pagination/pagination";

const SportPlayers = (props) => {
    const [players, setPlayers] = useState(props.players.slice(0, 8));
    const [pagination, setPagination] = useState({
        page:0,
        pageSize: 8,
        totalPages: props.players ? props.players.length / 10 : 0,
    });

    const getNewPage = (e) => {
        console.log("ssssssssssss", e, pagination)
        setPlayers(props.players.slice(e.selected * pagination.pageSize, e.selected * pagination.pageSize + pagination.pageSize))
        setPagination({
            page: e.selected,
            pageSize: pagination.pageSize,
            totalPages: pagination.totalPages
        });
        console.log(players, pagination)
    }

    return <div className={"row"}>
        <hr/>
        {pagination.totalPages > 1 && <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            getNewPage={getNewPage}
            showDetails={getNewPage}
            message="Нема играчи"/>
        }
        {players.map(p => {
            return <div className={"col-sm-6 col-md-4 col-lg-3 mb-5"}>
                <div className="card w-75 ml-auto mr-auto" style={{minHeight: "500px"}} >
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
                        <a href="#" className="btn btn-primary">Read more</a>
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
        <hr/>
    </div>
}

export default SportPlayers;