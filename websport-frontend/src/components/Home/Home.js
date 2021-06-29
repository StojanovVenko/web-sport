import React from "react";

const Home = (props) => {

    return (
        <div className="banner_bg_main" >
            <div className={"container"}>
                {props.children}


                {/*<div className="banner_section layout_padding">*/}
                {/*    <div className="container">*/}
                {/*        /!*<Carousel1 />*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="jewellery_section">*/}
                {/*    /!*<Carousel2 />*!/*/}
                {/*</div>*/}


            </div>

            {/*// <!-- header section end -->*/}
            {/*// <!-- banner section start -->*/}

            {/*// <!-- banner section end -->*/}
            <div className={"blank_content"}/>
        </div>
    );
}

export default Home;