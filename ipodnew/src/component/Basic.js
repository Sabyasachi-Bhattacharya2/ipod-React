import { Component } from "react";

import "./style.css"

export default class Basic extends Component {

    constructor(props) { 
        super(props);
        this.state = {displayMenu: true}

    }

    displayMenu = () => {
        this.setState((prev) => ({displayMenu: !prev.displayMenu}))
    }






    render() {
        return(
            <div className="container">
                <div className="ipod">
                    <div className="card">
                        {!this.state.displayMenu && (
                            <div className="menu">
                                <ul>
                                    <li>Music
                                        <span className="arrow">></span>
                                        <ul className="sub-menu">
                                            <li>Song1</li>
                                            <li>Song2</li>
                                        </ul>
                                    </li>
                                    <li>Games
                                        <span className="arrow">></span>
                                        <ul className="sub-menu">
                                            <li>Game1</li>
                                            <li>Game2</li>
                                        </ul>
                                    </li>
                                    <li>Settings
                                        <span className="arrow">></span>
                                        <ul className="sub-menu">
                                            <li>General</li>
                                            <li>Display</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        )}
                        Card Div
                    </div>
                    <div className="circular">
                        <button onMouseEnter={this.displayMenu}><i className="fas fa-bars"></i></button>
                        <button><i className="fas fa-chevron-up"></i></button>
                        <button><i className="fas fa-chevron-down"></i></button>
                        <button><i className="fas fa-play"></i>/<i className="fas fa-pause"></i></button>
                        <button><i className="fas fa-dot-circle"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}