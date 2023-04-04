import {Component} from "react";
import ButtonContext from "../Context/buttonContext";
import UserContext from "../Context/UserContext";

export  default  class Navigation extends  Component{
    static contextType = ButtonContext;
    render() {
        return (
        <div>
            <ButtonContext.Consumer>
                {(value) => {
                    return <div><a href='#'>{value}</a>
                        <UserContext.Consumer>
                            {(userValue) => {
                                return <div>{userValue.greet()} </div>
                            }
                            }
                        </UserContext.Consumer>
                    </div>
                }}
            </ButtonContext.Consumer>


        </div>
        );
    }
}