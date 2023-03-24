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
        count: true,
    };

    togglePostsHandler = () =>{
        this.setState({
            showPosts: !this.state.showPosts
        })
    }
    getPosts(){
        if (!this.state.showPosts) return null;
        return (
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


    render() {
        let posts = null;
        if(this.state.showPosts){

        }

        return(
            <div >
                <div>{this.state.count !==0 && 'show Count'}</div>
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
                {this.getPosts()}
            </div>
        )
    }
}

export default Post