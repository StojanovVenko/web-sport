import React, {useEffect, useState} from "react";
import PlayersService from "../../service/playersService";

const Players = () => {

    const [currPlayer, setCurrPlayer] = useState([]);
    useEffect(() => {
        PlayersService.getPlayer("Messi")
            .then(response => {
                setCurrPlayer(response.data);
                console.log(response.data);
            }).catch(err => {
            console.log("Error in Players component!");
        });
    }, []);


    return (
        <h1 className={"text-primary"}> This is players component</h1>
    )
};

export default Players;