import React, { Component } from 'react';
import './App.css';
import Typist from "react-typist";
import headerImg from "./laptop1.jpg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      h2: none,
    }
    this.changeStyle = this.changeStyle.bind(this)
  }

  componentDidMount() {
    setTimeout(this.changeStyle, 1000)
  }
  changeStyle() {
    this.setState({
      h2: show
    });
  };

  
  render() {
    return (
      <div className="body">
      
      <header>
        <img className="header__img" src={headerImg}/>
        <div className="header__textContainer">
          <h1>Hey, I'm Cristian.</h1>
          <h2 style={this.state.h2} > <span>And I'm a....</span>
          <Typist className="blinker" avgTypingDelay={44}>
            <Typist.Delay ms={500}/>
            Web Developer
            <Typist.Backspace count={13} delay={200}/>
            Full-stack Web Developer
          </Typist>
          </h2>
        </div>
      </header>

      
      </div>
    );
  }
}

let none={
display: "none",
};

let show ={
  display: 'flex', 
  display: '-webkit-box',
}

export default App;
