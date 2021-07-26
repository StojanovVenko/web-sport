import React from "react";
import "./Home.module.css";

const Home = (props) => {

    return (<div className={""}>
            <div className={"bg-ws mb-5"}/>
            <div className={"home-container container text-light rounded-3 py-3  mx-auto pb-100 rounded-3"}>
                <h2 className={" pb-0 text-ws text-center"}>What is sport?</h2>
                <p>{props.sportBaseInfo.sportAbstract}</p>
                <h2 className={" pb-0 text-ws text-center"}>History of sport</h2>
                <p>{props.sportBaseInfo.historyAbstract}</p>
            </div>
    </div>
    );
}

export default Home;