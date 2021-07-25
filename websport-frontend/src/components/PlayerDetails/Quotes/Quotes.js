import React from "react";
import "./Quotes.css";

const Quotes = (props) => {
    const quotes = props.quotes;

    const renderQuotes = () => {
        return quotes.map((q, i) => {
            let activeClass = i === 0 ? "active" : "";
            return <div className={"carousel-item " + activeClass}>
                <h4 className="banner_taital text-dark border-0 rounded shadow bg-light">{q}</h4>
            </div>;
        });
    }

    return (
        quotes.length !== 0 ?
            <div className={"mt-5 mb-5"}>
                <h2 className={"text-ws text-center p-2"}>Quotes</h2>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {renderQuotes()}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div> : "");
}

export default Quotes;