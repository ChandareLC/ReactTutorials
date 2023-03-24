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
                <div className='my-2'>
                    <input className='px-5 py-1 border border-gray-500 rounded-xl' type='text'
                    value={this.props.title}
                    onChange={this.props.titleChange}/>
                </div>
            </div>
        )
    }
}

export default SinglePost