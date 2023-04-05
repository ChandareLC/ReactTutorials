import {Component} from "react";
import {WithCategory} from "./WithCategory";

class Category extends Component {
    render() {
        return (
            <div>
                <div>Categories Component - name: {this.props.name}</div>
                {this.props.categories.map((category) => {
                    return <div> {category} </div>
                })}
            </div>
    );
    }
}

export default WithCategory(Category);