import React from "react";
import {Redirect, Route, Switch} from "react-router";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import PlayersService from "../../service/playersService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sports from "../Sports/Sports";
import {categories, sports} from "../../constants/constants";
import SportDetails from "../Sports/SportDetails";
import sportsService from "../../service/sportsService";
import teamService from "../../service/teamService";
import Loader from "../Loader/Loader";
import Teams from "../Teams/Teams";
import Home from "../Home/Home";
import About from "../About/About";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,

            currPlayer: [],
            currSport: null,
            currTeam: null,
            currCategory: null,

            selectedSport: {sport: "Choose sport"},

            sportBaseInfo: { historyAbstract: "", sportAbstract: "", sportComment: ""}
        };
    }

    componentDidMount() {
        sportsService.getSportInfo()
            .then(response => {
                this.setState({ sportBaseInfo: response.data });
            })
            .catch(err => console.log(err));
    }

    getTeamDetails = (teamName) => {
        this.setState({isLoading: true, currCategory: categories.teams});
        teamService.getTeam(teamName)
            .then(response => {
                this.setState({currTeam: response.data, isLoading: false});
            }).catch(err => {
            console.log("Error while fetching team data!");
            this.setState({isLoading: false});
        });
    }

    getPlayerDetails = (name) => {
        this.setState({isLoading: true, currCategory: categories.players});
        PlayersService.getPlayer(name)
            .then(response => {
                this.setState({currPlayer: response.data, isLoading: false});
                console.log(response.data);
            }).catch(err => {
            console.log("Error in Players component!");
            this.setState({isLoading: false, currPlayer: null});
        });
    }

    getPlayerDetailsByURI = (uri) => {
        this.setState({isLoading: true, currCategory: categories.players});
        PlayersService.getPlayerByURI(uri)
            .then(response => {
                this.setState({currPlayer: response.data, isLoading: false});
                console.log(response.data);
                console.log(this.state.currCategory, "hereee")

            }).catch(err => {
            console.log("Error in Players component!");
            this.setState({isLoading: false});
        });
        console.log(this.state.currCategory, "hereee")
    }

    selectSport = (sport) => {
        this.setState({isLoading: true, selectedSport: sport, currCategory: categories.sports});
        sportsService.getSport(sport.URI)
            .then(response => {
                console.log(response.data);
                this.setState({currSport: response.data, isLoading: false});
            })
            .catch(err => {
                console.log("Err ", err.message)
                this.setState({isLoading: false});
            });
    }

    selectCategory = (cat) => {
        this.setState({currCategory: cat})
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    render() {

        return <div className={"h-auto"}>
            <Header closeNav={this.closeNav}
                    openNav={this.openNav}
                    getPlayerDetails={this.getPlayerDetails}
                    category={this.state.currCategory}
                    setCategory={(cat) => {
                        this.setState({currCategory: cat})
                    }}
                    currPlayer={this.state.currPlayer}
                    sport={this.state.selectedSport}
                    selectSport={this.selectSport}
                    getTeamDetails={this.getTeamDetails}/>
            {this.state.isLoading && <Loader/>}
            <Switch>
                <Route path={"/"} exact>
                    <Redirect to={"/home"}/>
                </Route>
                <Route path={"/home"} exact>
                    <Home sportBaseInfo={this.state.sportBaseInfo}/>
                </Route>
                <Route path={"/players"} exact>
                    {this.state.isLoading || <PlayerDetails player={this.state.currPlayer}
                                                            getTeamDetails={this.getTeamDetails}/>}
                </Route>
                <Route path={"/teams"} exact>
                    <div className={"blank_content text-center"}>
                        {this.state.isLoading || <Teams team={this.state.currTeam}
                                                        getPlayerDetails={this.getPlayerDetailsByURI}
                                                        setCategory={(cat) => this.setState({currCategory: cat})}/>}
                    </div>
                </Route>
                <Route path={"/sports/details"} exact>
                    {this.state.isLoading || <SportDetails sport={this.state.currSport}
                                                           getPlayerDetails={this.getPlayerDetailsByURI}
                                                           setCategory={(cat) => this.setState({currCategory: cat})}/>}
                </Route>
                <Route path={"/sports"}>
                    <div className={"blank_content text-center"}>
                        <Sports selectSport={this.selectSport}/>
                    </div>
                </Route>
                <Route path={"/about"}>
                    <div className={"blank_content text-center"}>
                        <About />
                    </div>
                </Route>
                <Redirect to={"/home"}/>
            </Switch>
            <Footer setCategory={this.selectCategory}/>

        </div>;
    }
}

export default App;