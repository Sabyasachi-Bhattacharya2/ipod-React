import { Component } from "react";

import "./style.css"

export default class Basic extends Component {








    render() {
        return(
            <div className="container">
                <div className="ipod">
                    <div className="card">
                        Card Div
                    </div>
                    <div className="circular">
                        <button><i className="fas fa-bars"></i></button>
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