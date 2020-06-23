import React, { Component } from "react";
import ReactDOM from "react-dom";
import element from "../components/app/app";

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderElem() {
        return ReactDOM.render(element, document.getElementById("application"));
    }
}

export default App;