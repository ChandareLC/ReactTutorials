import {Component} from "react";

export  default  class Navigation extends  Component{
    render() {
        return (
        <div>
            <a href='#'>{this.props.name}</a>
        </div>
        );
    }
}