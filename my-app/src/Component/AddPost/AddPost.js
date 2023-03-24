import {Component} from "react";


class  AddPost extends Component {
    state = {
        title:'',
        description:'',
        status:'',
    }


    addPosthandler = (e) =>{
         e.preventDefault();
         console.log('14', this.state);

    }
    textChange = (title,e) =>{
        this.setState(
            {
                [title]:e.target.value,
            }
        )
    }
render() {
    return(
        <div>
            <h2> Add Post</h2>
            <form onSubmit={this.addPosthandler}>
                <div>
                    <label>Tittle</label>
                    <input type='text'
                           onChange={this.textChange.bind(this,'title')}
                           value={this.state.title}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={this.state.description}
                    onChange={this.textChange.bind(
                      this,
                        'description'
                        )}></textarea>
                </div>
                <div>
                    <label>Status</label>
                    <select value={this.state.status} onChange={this.textChange.bind(this,'status')}>
                        <option value='active'>Active</option>
                        <option value='inactive'>Inactive</option>
                    </select>
                </div>
                <div>
                    <button
                        type='submit'
                        style={{
                            backgroundColor:'indigo',
                            color:'white',
                            paddingLeft:"3rem",
                            marginTop:'10px',
                            paddingRight:"3rem",
                            paddingTop:"2rem",
                            paddingBottom:"2rem"
                        }}
                >Add post
                    </button>
                </div>
            </form>
        </div>
    )
}
}
export default  AddPost;
