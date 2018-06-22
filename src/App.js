import React, { Component } from 'react';
import './App.css';
import Typist from "react-typist";
import headerImg from "./Images/laptop1.jpg";
import beachBoy from "./Images/beachBoy.jpg";

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

      
      <section id="about">
        {/* <h3>About me</h3> */}
        <div className="about__textContainer">
          <img className="about__img" src={beachBoy} />
          <h4 className="about__info">Officia labore exercitation proident sint aliquip sit proident. Ea mollit ullamco Lorem proident ea. Labore ea adipisicing Lorem labore laborum exercitation commodo aliqua anim aliqua eiusmod est incididunt sint. Est nisi aute laborum elit ea ad duis eu eiusmod in est aute. Consectetur consequat duis sint aliqua cillum veniam voluptate. Officia do non consequat et ipsum. Duis excepteur incididunt culpa ullamco id voluptate ipsum incididunt magna in irure Lorem.</h4>
        </div>
      </section>
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
