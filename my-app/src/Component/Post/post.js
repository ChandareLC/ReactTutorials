import {Component} from "react";
import SinglePost from "../SinglePost/singlePost";

class Post extends Component {
    state = {
        posts: [
            {title:'Post 1', description:'post1 description'},
            {title:'Post 2', description:'post2 description'},
        ],
        postTitle:'Post List'
    };
    updateTitleHandle(title,e){
        e.preventDefault();
        console.log('Updating title')
        this.setState({
            postTitle:title,
        });
    };
    titleHandle = (title,e) =>{
        e.preventDefault();
        console.log('Updating title via property function ')
        this.setState({
            postTitle:title,
        });
    }

    render() {

        return(
            <div >
                <h2  style={{
                    fontSize:"xx-large",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}>{this.state.postTitle}</h2>
                <div>
                <a onClick={this.titleHandle.bind(
                    this, 'Chathuranga'
                )}
                   style={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    backgroundColor:"red",
                    color:"white",

                }}
                   href='http://www.google.com'>
                    Update with property
                </a>
                    <a onClick= {
                        this.updateTitleHandle.bind(this,
                            'Modified'
                        )}
                       style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        backgroundColor:"red",
                        color:"white",

                    }}
                       href='http://www.google.com'>
                        Update Via Method
                    </a>
                </div>
                <hr/>
            <div style={{
                display:"flex",
            }}>
                <SinglePost
                    title={this.state.posts[0].title}
                    decription={this.state.posts[0].description}
                />
                <SinglePost
                    title={this.state.posts[1].title}
                    decription={this.state.posts[1].description}
                />
            </div>
            </div>
        )
    }
}

export default Post