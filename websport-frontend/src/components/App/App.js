import React, {useEffect, useState} from "react";
import {useHistory, Route, Switch, withRouter} from "react-router";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Players from "../Players/Players";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import PlayersService from "../../service/playersService";
import Footer from "../Footer/Footer";
import Carousel1 from "../Carousel1/Carousel1";
import Carousel2 from "../Carousel2/Carousel2";
import HeaderSectionTop from "../Header/HeaderSectionTop";
import HeaderSectionSearch from "../Header/HeaderSectionSearch";
import Header from "../Header/Header";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currPlayer: []
        };
    }
    // const [currPlayer, setCurrPlayer] = useState([]);
    // const [searchPlayer, setSearchPlayer] = useState("");

    getPlayerDetails = (name) => {
        PlayersService.getPlayer(name)
            .then(response => {
                this.setState({currPlayer: response.data});
                console.log(response.data);
            }).catch(err => {
            console.log("Error in Players component!");
        });
    }
    // useEffect(() => {
    //     PlayersService.getPlayer("Messi")
    //         .then(response => {
    //             setCurrPlayer(response.data);
    //         }).catch(err => {
    //         console.log("Error in Players component!");
    //     });
    // }, []);

    openNav () {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    render() {

        return <>
            <Switch>
                <Route path={"/home"} exact>
                    <div className="banner_bg_main" >
                        <div className={"container"}>
                            <Header closeNav={this.closeNav}
                                    openNav={this.openNav}
                                    getPlayerDetails={this.getPlayerDetails}
                                    category={"Players"}/>
                            <div className={"blank_content"}/>


                            <div className="banner_section layout_padding">
                                <div className="container">
                                    {/*<Carousel1 />*/}
                                </div>
                            </div>
                            <div className="jewellery_section">
                                {/*<Carousel1 />*/}
                                {/*<Carousel2 />*/}
                            </div>


                        </div>

                        {/*// <!-- header section end -->*/}
                        {/*// <!-- banner section start -->*/}

                        {/*// <!-- banner section end -->*/}

                    </div>

                </Route>
                <Route path={"/players"} exact>
                    <Header closeNav={this.closeNav}
                            openNav={this.openNav}
                            getPlayerDetails={this.getPlayerDetails}
                            category={"Players"}/>
                    <PlayerDetails player={this.state.currPlayer}/>
                </Route>
                <Route path={"/teams"} exact>
                    <Header closeNav={this.closeNav}
                            openNav={this.openNav}
                            getPlayerDetails={this.getPlayerDetails}
                            category={"Teams"}/>
                    <div className={"blank_content text-center"}>
                        Teams component
                    </div>
                </Route>
                <Route path={"/sports"} exact>
                    <Header closeNav={this.closeNav}
                            openNav={this.openNav}
                            getPlayerDetails={this.getPlayerDetails}
                            category={"Sports"}/>
                    <div className={"blank_content text-center"}>
                        Sports component
                    </div>
                </Route>
            </Switch>
            <Footer/>

        </>;
    }
}

export default App;