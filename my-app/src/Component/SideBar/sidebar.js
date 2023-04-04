import {Component} from "react";
import Navigation from "../Navigation/navigation";

export default class Sidebar extends Component{
    render() {
        return  (
            <div>
                {this.props.children}
            </div>
        )

    }
}