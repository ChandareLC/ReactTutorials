import {Component} from "react";
import Navigation from "../Navigation/navigation";

export default class Sidebar extends Component{
    render() {
        return  (
            <div> <Navigation>
                {this.props.children}
            </Navigation>
            </div>
        )

    }
}