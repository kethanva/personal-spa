import React, { Component } from "react";
import Headers from "./components/structure/Headers";
import Content from "./components/structure/Content";
import Resume from "./resume.json";

class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }

  render() {
    return (
      <div>
        <Headers />
        <Content />
      </div>
    );
  }
}

export default App;
