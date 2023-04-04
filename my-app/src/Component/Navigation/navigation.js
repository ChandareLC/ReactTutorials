import {Component} from "react";
import ButtonContext from "../Context/buttonContext";
import UserContext from "../Context/UserContext";

export  default  class Navigation extends  Component{
    static contextType = ButtonContext;
    render() {
        return (
        <div>
            {this.props.children}

        </div>
        );
    }
}