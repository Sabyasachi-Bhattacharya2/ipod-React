import { Component } from "react";

export default class Basic extends Component {








    render() {
        return(
            <div>
                <div>
                    Card Div
                </div>
                <div className="circular">
                    <button>Menu</button>
                    <button>Up</button>
                    <button>Down</button>
                    <button>Play/Pause</button>
                </div>
            </div>
        )
    }
}