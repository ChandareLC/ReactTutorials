import {Component} from "react";

class SinglePost extends Component{
    constructor(props) {
        super(props)
        console.log('[Single Post] Constructor called')
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Single Post] get derived called');
    //     return state
    //
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Single Post] shoul component updated fired');
        return true;
    }


    render() {
        console.log('[Single Post] render called');

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
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Single Post] get snapshot fired')
        return 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[Single Post] component did updated fired')
    }

    componentDidMount() {
        console.log('[Single Post] Did Mount called');
    }
}

export default SinglePost