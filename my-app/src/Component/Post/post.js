import {Component} from "react";
import SinglePost from "../SinglePost/singlePost";

class Post extends Component {
    state = {
        posts: [
            {title:'Post 1', description:'post1 description'},
            {title:'Post 2', description:'post2 description'},
        ],
        postTitle:'Post List',
        showPosts: true,
    };

    togglePostsHandler = () =>{
        this.setState({
            showPosts: !this.state.showPosts
        })
    }


    render() {
        let posts = null;
        if(this.state.showPosts){
            posts = (
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
            )
        }

        return(
            <div >
                <h2  style={{
                    fontSize:"xx-large",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}>{this.state.postTitle}</h2>
                <div>
                   <button style={{
                      backgroundColor:"red",
                       color:"white",
                       paddingLeft:"3rem",
                       paddingRight:"3rem",
                       paddingTop:"2rem",
                       paddingBottom:"2rem"
                   }} onClick={this.togglePostsHandler}>{
                       this.state.showPosts
                       ? 'Hide Posts' :
                       'Show Posts'
                   }</button>
                </div>
                <hr/>
                {this.state.showPosts ? (
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
                ) : null}
            </div>
        )
    }
}

export default Post