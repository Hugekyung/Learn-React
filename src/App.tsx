import Counter from "Counter";
import ExampleProps from "exampleProps";
import React from "react";
import ShowName from "ShowName";

class App extends React.Component {
    public render() {
        return (
            <div>
                <ExampleProps />
                <ShowName name="yanghaechan" />
                <Counter startNumber={5} />
            </div>
        );
    }
}

export default App;
