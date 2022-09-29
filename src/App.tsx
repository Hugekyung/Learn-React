import Counter from "Counter";
import ExampleProps from "exampleProps";
import Hello from "hello";
import React from "react";
import ShowName from "ShowName";

class App extends React.Component {
    public render() {
        return (
            <div>
                <Hello name="해찬" />
                <ExampleProps />
                <ShowName name="yanghaechan" />
                <Counter startNumber={5} />
            </div>
        );
    }
}

export default App;
