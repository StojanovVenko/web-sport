import React from "react";
import {Route} from "react-router";

const Home = (props) => {

    return (<div>
            <div className={"bg-ws mb-5"}/>
            <div className={"container text-dark rounded-3 py-3 my-3 mx-auto pb-100 bg-white rounded-3"}>
                <h2 className={" pb-0 text-ws text-center"}>What is sport?</h2>
                <p>{props.sportBaseInfo.sportAbstract}</p>
                <h2 className={" pb-0 text-ws text-center"}>History of sport</h2>
                <p>{props.sportBaseInfo.historyAbstract}</p>

            </div>
    </div>
    );
}

export default Home;