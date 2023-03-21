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
    render() {
        setTimeout(()=>{
            console.log('modified');
            const posts = [...this.state.posts];
            this.state.posts[0].title='Modified Data 1'
            this.state.posts[1].title='Modified Data 2 '

            this.setState({
                posts,
            });
            this.setState({
                postTitle:'Modified Post Title',
            })
        },3000);
        return(
            <div >
                <h2  style={{
                    fontSize:"xx-large",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}>{this.state.postTitle}</h2>
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