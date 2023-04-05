import React,{Component} from 'react';
import RefTextInput from "./RefTextInput";

export class ParentRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef=React.createRef();
    }
    componentDidMount() {
        this.componentRef.current.focusInput('Calling from parent');

    }

    render() {
        return (
            <div>
                <RefTextInput ref={this.componentRef} />
            </div>
        );
    }
}