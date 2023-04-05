import {Component} from "react";

export function WithCategory(limit) {


    return function (WrappedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    categories: [
                        'category1',
                        'category2',
                        'category3',
                        'category4',
                    ],
                };
            }

            render() {
                const categories = this.state.categories.slice(0, limit)
                return (
                    <div>
                        <div>Category Title</div>
                        <WrappedComponent {...this.props} categories = {categories}/>
                    </div>
                );
            }
        };

    }
}