import React, {useEffect, useState} from "react";
import {useHistory, Route, Switch, withRouter, Redirect} from "react-router";

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
import Sports from "../Sports/Sports";
import {categories} from "../../constants/constants";
import SportDetails from "../Sports/SportDetails";
import sportsService from "../../service/sportsService";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currPlayer: [],
            currSport: null,

            selectedSport: {sport: "Choose sport"}
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

    selectSport = (sport) => {
        sportsService.getSport(sport.URI)
            .then(response => {

            })
            .catch(err => {

            });
        this.setState({selectedSport: sport});
    }

    render() {

        return <div className={"h-auto"}>
            <Switch>
                <Route path={"/"} exact >
                    <Redirect to={"/home"}/>
                </Route>
                <Route path={"/home"} exact>
                    <div className="banner_bg_main" >
                        <div className={"container"}>
                            <Header closeNav={this.closeNav}
                                    openNav={this.openNav}
                                    getPlayerDetails={this.getPlayerDetails}
                                    category={categories.players}
                                    sport={this.state.selectedSport}
                                    selectSport={this.selectSport}/>
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
                            category={categories.players}/>
                    <PlayerDetails player={this.state.currPlayer}/>
                </Route>
                <Route path={"/teams"} exact>
                    <Header closeNav={this.closeNav}
                            openNav={this.openNav}
                            getPlayerDetails={this.getPlayerDetails}
                            category={categories.teams}/>
                    <div className={"blank_content text-center"}>
                        Teams component
                    </div>
                </Route>
                <Route path={"/sports/details"} exact>
                    <Header closeNav={this.closeNav}
                            openNav={this.openNav}
                            getPlayerDetails={this.getPlayerDetails}
                            category={categories.sports}
                            sport={this.state.selectedSport}
                            selectSport={this.selectSport}/>
                    <SportDetails />
                </Route>
                <Route path={"/sports"} >
                    <Header closeNav={this.closeNav}
                            openNav={this.openNav}
                            getPlayerDetails={this.getPlayerDetails}
                            category={categories.sports}
                            sport={this.state.selectedSport}
                            selectSport={this.selectSport}/>

                    <div className={"blank_content text-center"}>
                        <Sports selectSport={this.selectSport} />
                    </div>
                </Route>
            </Switch>
            <Footer/>

        </div>;
    }
}

export default App;