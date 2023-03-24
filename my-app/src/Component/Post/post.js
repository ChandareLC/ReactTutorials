import {Component} from "react";
import SinglePost from "../SinglePost/singlePost";
import AddPost from "../AddPost/AddPost";

class Posts extends Component {
    state = {
        posts: [
            {
                id: '1',
                title: 'post 1',
                description: 'post1 description 1',
            },
            {
                id: '2',
                title: 'post 2',
                description: 'post1 description 2',
            },
            {
                id: '3',
                title: 'post 3',
                description: 'post1 description 2',
            },
        ],

        postTitle: 'Posts List',
        showPosts: true,
        count: false,
    };

    togglePostsHandler = () => {
        this.setState({
            showPosts: !this.state.showPosts,
        });
    };
    onChangeTitleHandler = (id,e) => {
        const postIndex = this.state.posts.findIndex(
            (post)=> post.id ===id,
        );
        const posts = [...this.state.posts];
        posts[postIndex].title= e.target.value;
        this.setState({
            posts
        });

    }

    getPosts() {
        if (!this.state.showPosts) return null;

        // let posts = this.state.posts.map((post) => (
        //     <SinglePost
        //         title={post.title}
        //         description={post.description}
        //     />
        // ));

        let posts = [];

        for (let post of this.state.posts) {
            posts.push(
                <SinglePost
                    title={post.title}
                    description={post.description}
                    titleChange={this.onChangeTitleHandler.bind(this,post.id)}
                />,
            );
        }
        return (
            <div style={{
                display:"flex",
            }}>
                {this.state.posts.map((post, index) => {
                    return (
                        <SinglePost
                            key={post.id}
                            title={post.title}
                            titleChange={this.onChangeTitleHandler.bind(this,post.id)}
                            description={post.description}
                        />
                    );
                })}
            </div>
        );
    }

    render() {
        let posts = null;

        if (this.state.showPosts) {
            posts = (
                <div style={{
                    display:"flex",
                }}>
                    <SinglePost
                        title={this.state.posts[0].title}
                        description={this.state.posts[0].description}
                    />
                    <SinglePost
                        title={this.state.posts[1].title}
                        description={this.state.posts[1].description}
                    />
                </div>
            );
        }
        return (
            <div>
                <div>{this.state.count && 'show Count'}</div>
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
                    }}
                            onClick={this.togglePostsHandler}

                    >
                        {this.state.showPosts
                            ? 'Hide Posts'
                            : 'Show Posts'}
                    </button>
                </div>
                <hr />
                {this.getPosts()}
                <AddPost></AddPost>
            </div>
        );
    }
}

export default Posts;