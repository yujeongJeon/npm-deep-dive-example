import React from "react";
import { MyComponent } from "@ndive/mycomponents";

function App() {
    return (
        (<div>
            <MyComponent newProp="Hello World" otherProp={123} />
            <MyComponent newProp={someVariable} />
            <MyComponent otherProp={456} />
        </div>)
    );
}

export default App;
