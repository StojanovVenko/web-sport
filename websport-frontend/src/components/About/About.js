import React from "react";
import "./About.module.css";

const About = () => {

    return <>
        <div className={"bg-ws mb-5"}/>
        <div className={"about-container container text-light rounded-3 py-3 my-3 mx-auto pb-100 bg-dark rounded-3"}>
            <h2 className={"mt-5 mb-3 pb-0 text-ws"}>What is <span className={"text-danger font-weight-bold"}>WEBSPORT</span> ?</h2>
            <p >Very often when we want to find out information about a sport, club or player we also get information that is not related to what we are looking for.
                That is why our application offers information related to sports.
                In it you can search for a different sport, search for data on different teams to list the players who played for it,
                as well as get information about each player.
                We get this information from <a href="https://www.dbpedia.org/" target="_blank">https://www.dbpedia.org/</a>
            </p>
            <h2 className={"mt-5 mb-3 pb-0 text-ws"}>
                What is <span className={"text-danger font-weight-bold"}>DBPEDIA</span> ?
            </h2>
            <p className={"mb-2"}>
                DBpedia is a crowd-sourced community effort to extract structured content from the information created in various Wikimedia projects.
                This structured information resembles an open knowledge graph (OKG) which is available for everyone on the Web.
                A knowledge graph is a special kind of database which stores knowledge in a machine-readable form and provides a means for information
                to be collected, organised, shared, searched and utilised.
            </p>
            <p className={"mb-5"}>
                DBpedia data is served as Linked Data, which is revolutionizing the way applications interact with the Web.
                One can navigate this Web of facts with standard Web browsers, automated crawlers or pose complex queries with SQL-like query languages (e.g. SPARQL).
            </p>
        </div>
    </>
};

export default About;