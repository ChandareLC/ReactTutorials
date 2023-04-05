import {Component} from "react";

export function WithCategory (WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { categories: ['category1', 'category2']}
        }
        render() {
            return (
                <div>
                    <div>Category Title</div>
                    <WrappedComponent {...this.props} {...this.state}/>
                </div>
            );
        }
    };

}