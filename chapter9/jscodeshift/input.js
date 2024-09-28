import React from "react";
import { MyComponent } from "@ndive/mycomponents";

function App() {
    return (
        <div>
            <MyComponent oldProp="Hello World" otherProp={123} />
            <MyComponent oldProp={someVariable} />
            <MyComponent otherProp={456} />
        </div>
    );
}

export default App;
