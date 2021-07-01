import React from "react";
import "./Quotes.css";

const Quotes = (props) => {

    console.log(props.quotes, "QUOTES")

    const renderQuotes = () => {
        return props.quotes.map((q, i) => {
            let activeClass = i===0 ? "active" : "";

            return <div className={"carousel-item " + activeClass }><h4 className="banner_taital text-dark border-0 rounded shadow bg-light">{q}</h4></div>;

        });
    }

    return (
        props.quotes.length !== 0 ?
        <div>
            <h1 className={"text-light text-center p-2"}>Quotes</h1>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {renderQuotes()}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        {/*<div id="my_slider" className="carousel slide bg-transparent" data-ride="carousel" >*/}
        {/*    <div className="carousel-inner">*/}
        {/*        {props.quotes && renderQuotes()}*/}
        {/*    </div>*/}
        {/*    <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">*/}
        {/*        <i className="fa fa-angle-left"/>*/}
        {/*    </a>*/}
        {/*    <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">*/}
        {/*        <i className="fa fa-angle-right"/>*/}
        {/*    </a>*/}
        {/*</div>*/}
    </div> : "");
}

export default Quotes;