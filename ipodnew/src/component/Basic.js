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
                        <button>Menu</button>
                        <button>Up</button>
                        <button>Down</button>
                        <button>Play/Pause</button>
                    </div>
                </div>
            </div>
        )
    }
}