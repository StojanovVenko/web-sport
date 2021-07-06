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
import Loader from "../Loader/Loader";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,

            currPlayer: [],
            currSport: null,

            selectedSport: {sport: "Choose sport"}
        };
    }
    // const [currPlayer, setCurrPlayer] = useState([]);
    // const [searchPlayer, setSearchPlayer] = useState("");

    getPlayerDetails = (name) => {
        this.setState({ isLoading: true });
        PlayersService.getPlayer(name)
            .then(response => {
                this.setState({currPlayer: response.data, isLoading: false});
                console.log(response.data);
            }).catch(err => {
            console.log("Error in Players component!");
            this.setState({ isLoading: false });
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
        this.setState({ isLoading: true, selectedSport: sport });
        sportsService.getSport(sport.URI)
            .then(response => {
                console.log(response.data);
                this.setState({ currSport: response.data, isLoading: false});
            })
            .catch(err => {
                console.log("Err ", err.message)
                this.setState({ isLoading: false });
            });
        // this.setState({selectedSport: sport});
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
                    {this.state.isLoading && <Loader/>}
                    {this.state.isLoading || <PlayerDetails player={this.state.currPlayer}/>}
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
                    {this.state.isLoading && <Loader/>}
                    {this.state.isLoading || <SportDetails sport={this.state.currSport}/>}
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