import Counter from "Counter";
import React from "react";
import ShowName from "ShowName";

class App extends React.Component {
    public render() {
        return (
            <div>
                <ShowName name="yanghaechan" />
                <Counter startNumber={5} />
            </div>
        );
    }
}

export default App;
