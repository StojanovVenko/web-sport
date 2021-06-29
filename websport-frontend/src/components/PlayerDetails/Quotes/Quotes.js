import React from "react";
import "./Quotes.css";

const Quotes = (props) => {

    const renderQuotes = () => {
        return props.quotes.map((q, i) => {
            let activeClass = i===0 ? "active" : "";
            return <div className={"carousel-item " + activeClass }  >
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="banner_taital">{q}</h4>
                    </div>
                </div>
            </div>;

        });
    }

    return (<>
    <h1>Quotes</h1>

        <div id="my_slider" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
                {props.quotes && renderQuotes()}
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left"/>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right"/>
            </a>
        </div>
    </>);
}

export default Quotes;