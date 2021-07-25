import React from "react";

const Home = (props) => {

    return (<div >
            <div className="banner_bg_main mb-5" style={{minHeight: "600px"}} >
                {props.children}
           </div>
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