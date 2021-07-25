import React from "react";
import {Route} from "react-router";

const Home = (props) => {

    return (<div>
            <div className={"bg-ws mb-5"}/>
            <div className={"container text-dark rounded-3  my-3 mx-auto pb-100"} style={{opacity: "0.8"}}>
                <h3 className={" pb-0 text-ws"}>What is sport?</h3>
                <p>{props.sportBaseInfo.sportAbstract}</p>
                <br/>
                <h3 className={" pb-0 text-ws"}>History of sport</h3>
                <p>{props.sportBaseInfo.historyAbstract}</p>

            </div>
    </div>
    );
}

export default Home;