import React, { Component } from "react";

class ExampleProps extends Component {
    state = { value: "TEST !" };
    render() {
        return <div>{this.state.value}</div>;
    }
}

export default ExampleProps;
