import Counter from "Counter";
import CounterTwo from "CounterTwo";
import ExampleProps from "exampleProps";
import Hello from "hello";
import InputSample from "inputSample";
import React from "react";
import ShowName from "ShowName";
import { ExampleUM } from "./useUseMemo";

class App extends React.Component {
    public render() {
        return (
            <div>
                <ExampleUM />
                {/* <Hello name="해찬" />
                <ExampleProps />
                <ShowName name="yanghaechan" /> */}
                {/* <Counter startNumber={5} /> */}
                {/* <CounterTwo />
                <InputSample /> */}
            </div>
        );
    }
}

export default App;
