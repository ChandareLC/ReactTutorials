import {Component} from "react";

class SinglePost extends Component{
    render() {

        return(
            <div style={
                {
                  margin:'20px',
                    padding: '3px',
                    border: `2px solid gray`
                }
            }>
                <h3 style={{
                    fontSize:"x-large",
                    color:"blue",
                    fontWeight:"bold"
                }}>{this.props.title}</h3>
                <div>{this.props.decription}</div>
                <div>{this.props.children}</div>
                <div>{this.props.addpost}</div>
            </div>
        )
    }
}

export default SinglePost