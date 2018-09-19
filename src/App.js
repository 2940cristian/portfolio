import React, { Component } from 'react';
import './App.css';
import Typist from "react-typist";
import headerImg from "./Images/laptop1.jpg";
import mentrship from "./Images/mentrship.png";
import picme from "./Images/picme.png";
import phone from "./Images/phone.png";
import email from "./Images/email.png";
import location from "./Images/location.png";
import Axios from 'axios';
import profile from "./Images/profile.jpg"
import phoneprofile from "./Images/phoneprofile.jpg"
class App extends Component {
  constructor() {
    super();

    this.state = {
      h2: none,
      content: "",
      width: 0,
      show: none,
    }
    this.changeStyle = this.changeStyle.bind(this)
  }

  componentDidMount() {
    setTimeout(this.changeStyle, 1000)
    this.setState({
      window: window.innerWidth
    })
    window.addEventListener("resize", () => {this.setState({window: window.innerWidth})})

    Axios.get("https://portfolio-mail1.herokuapp.com/wakeup")
    .then(Response => {
      console.log(Response)
    }).catch(err => {
      alert("My server appears to have crashed, sorry about the inconvenience, bugs occur sadly")
    })
  }
  changeStyle() {
    this.setState({
      h2: show
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.content.length < 1) return;

    this.handleShow()

    Axios.post("https://portfolio-mail1.herokuapp.com/", {content: this.state.content})
    .then(response => {
      console.log(response)
      this.setState({
        content: " "
      })
    }).catch(err => {
      console.log(err)
    })

  }

  handleShow() {
    if(this.state.show == none) {
      this.setState({
        show: ""
      })
    }

    else {
      this.setState({
        show: none
      })
    }
  }
  
  render() {
    return (this.state.window >= 700) ? (
      <div className="body">

      <div style={this.state.show} className="modal">
      <p>Message Sent</p>
      <button>OK</button>
      </div>
      
      <header>
        <div id="responsive-header">
          <img className="header__img" src={headerImg} alt="Background with tech"/>
        </div>
        <div className="header__textContainer">
          <h1>Hey, I'm Cristian.</h1>
          <h2 style={this.state.h2} > <span>And I'm a....</span>
          <Typist className="blinker" avgTypingDelay={44}>
            <Typist.Delay ms={1200}/>
            Web Developer
            <Typist.Backspace count={13} delay={200}/>
            Full-stack Web Developer
          </Typist>
          </h2>
        </div>
      </header>

      
      <section id="about">
        <div className="about__header">
          <h1>A little about me</h1>
          <p>Hard-working Full-Stack Web developer with a passion for generating solutions.  Experienced with all stages of development from creation to deployment. 
            Worked on multiple projects in a team environment where we utilized Scrum and Agile methodologies to meet short deadlines. </p>
        </div>

        <div className="about__content">
            <div className="about__list">
              <ul>
                <li className="about__list-contact">Name: <span className="about__list-span">Cristian Garcia</span> </li>
                <li className="about__list-contact age-responsive">Age: <span className="about__list-span">20 years</span> </li>
                <li className="about__list-contact">Email: <span className="about__list-span">2940cristian@gmail.com</span> </li>
                <li className="about__list-contact">Phone: <span className="about__list-span">760-889-6247</span> </li>
              </ul>
            </div>
            <div className="about__image"><img src={profile}/></div>
            <div className="about__list">
            <ul>
              <p className="about__list-contact">Skills</p>
                <li style={{color: "rgba(0, 0, 0, 0.7)"}} className="about__list-contact">Javascript (MERN)</li>
                <li style={{color: "rgba(0, 0, 0, 0.7)"}} className="about__list-contact">SQL</li>
                <li style={{color: "rgba(0, 0, 0, 0.7)"}} className="about__list-contact">Python</li>
              </ul>
            </div>
        </div>   
        
      </section>

       <section id="projects">
        <div className="projects__header">Projects:</div>
          <div className="projects__imgs">
            <div className="project" id="project__right">
              <p>PicMeCollections is an image sharing platform where users can make friends and share their photos.
                Built by 4 Lambda School Engineers in a span of 4 weeks.
                <br></br>
                <br></br>
                Technologies involved: Postgresql, Node, Express, React, Sqlite, Redux</p>
              <img src={picme} alt="Image sharing platform"/>
            </div>

            <div className="project" id="project__left">
              <img src={mentrship} alt="A web application for quizzing applicants"/>
              <p><span id="project__left-WIP">(W.I.P) </span> 
                MentrShip, is a project being built by a team of 6 volunteers. We have the hopes of it being a 
                completely free site where users can recieve mentorship from those who would like to offer their aid. 
                <br></br>
                <br></br>
                Front-End Technologies: React, Typescript, Sass, Material-ui
              </p></div>
          </div>
      </section>

      <section id="contact">
      <form onSubmit={this.handleSubmit} id="form">
          <p>Let's get in touch. Please leave your name along with either your email, phone number, or any other contact method. Will respond as quickly as possible</p>
          <textarea onChange={this.onChange} value={this.state.content} type="text" name="content" value={this.state.content} placeholder="Ex: Hey, my name is John Doe and i'm messaging you because ...... please conact me at ...."/>
          <button type="submit">Submit</button>
      </form>

      <section id="contact__other">
        <div className="contact__card">
          <img src={location}/>
          <h3>Located AT:</h3>
          <p>Southern California</p>
        </div>

        <div className="contact__card">
          <img src={email}/>
          <h3>EMAIL ME AT:</h3>
          <p>2940cristian@gmail.com</p>
        </div>

        <div className="contact__card">
          <img src={phone}/>
          <h3>CALL ME AT:</h3>
          <p>760-889-6247</p>
        </div>
      </section>

      </section>


      <footer>
        <p>&copy; Cristian Garcia 2018</p>
      </footer>


      </div>
    ) : (
      <div className="body">
      
      <header>
        <div id="responsive-header">
          <img className="header__img" src={headerImg} alt="Background with tech"/>
        </div>
        <div className="header__textContainer">
          <h1>Hey, I'm Cristian</h1>
          <h2 style={this.state.h2} > <span>And I'm a....</span>
          <Typist className="blinker" avgTypingDelay={44}>
            <Typist.Delay ms={1200}/>
            Web Developer
            <Typist.Backspace count={13} delay={200}/>
            Full-stack Web Developer
          </Typist>
          </h2>
        </div>
      </header>

      
      <section id="about">
        <div className="about__header">
          <h1>A little about me</h1>
          <img className="about__image-responsive" src={phoneprofile}/>
          <p>Hard-working Full-Stack Web developer with a passion for generating solutions.  Experienced with all stages of development from creation to deployment. 
            Worked on multiple projects in a team environment where we utilized Scrum and Agile methodologies to meet short deadlines. </p>
        </div>

        <div className="about__content">
            <div className="about__list">
              <ul>
                <li className="about__list-contact">Name: <span className="about__list-span">Cristian Garcia</span> </li>
                <li className="about__list-contact age-responsive">Age: <span className="about__list-span">20 years</span> </li>
                <li className="about__list-contact">Email: <span className="about__list-span">2940cristian@gmail.com</span> </li>
                <li className="about__list-contact">Phone: <span className="about__list-span">760-889-6247</span> </li>
              </ul>
            </div>
            {/* <div className="about__image"><img src={profile}/></div> */}
            <div className="about__list">
            <ul>
              <p className="about__list-contact">Skills</p>
                <li style={{color: "rgba(0, 0, 0, 0.7)"}} className="about__list-contact">Javascript (MERN)</li>
                <li style={{color: "rgba(0, 0, 0, 0.7)"}} className="about__list-contact">SQL</li>
                <li style={{color: "rgba(0, 0, 0, 0.7)"}} className="about__list-contact">Python</li>
              </ul>
            </div>
        </div>   
        
      </section>

       <section id="projects">
        <div className="projects__header">Projects:</div>
          <div className="projects__imgs">
            <div className="project" id="project__right">
              <img src={picme} alt="Image sharing platform"/>
              <p>PicMeCollections is an image sharing platform where users can make friends and share their photos.
                Built by 4 Lambda School Engineers in a span of 4 weeks.
                Technologies involved: Postgresql, Node, Express, React, Sqlite, Redux</p>
            </div>

            <div className="project" id="project__left">
              <img src={mentrship} alt="A web application for quizzing applicants"/>
              <p><span id="project__left-WIP">(W.I.P) </span> 
                MentrShip, is a project being built by a team of 6 volunteers. We have the hopes of it being a 
                completely free site where users can recieve mentorship from those who would like to offer their aid. 
                <br></br>
                <br></br>
                Front-End Technologies: React, Typescript, Sass, Material-ui
              </p></div>
          </div>
      </section>

      <section id="contact">
      <form onSubmit={this.handleSubmit} id="form">
          <p>Let's get in touch. Please leave your name along with either your email, phone number, or any other contact method. Will respond as quickly as possible</p>
          <textarea onChange={this.onChange} type="text" name="content" placeholder="Ex: Hey, my name is John Doe and i'm messaging you because ...... please conact me at ...."/>
          <button type="submit">Submit</button>
      </form>

      <section id="contact__other">
        <div className="contact__card">
          <img src={location}/>
          <h3>Located AT:</h3>
          <p>Southern California</p>
        </div>

        <div className="contact__card">
          <img src={email}/>
          <h3>EMAIL ME AT:</h3>
          <p>2940cristian@gmail.com</p>
        </div>

        <div className="contact__card">
          <img src={phone}/>
          <h3>CALL ME AT:</h3>
          <p>760-889-6247</p>
        </div>
      </section>

      </section>


      <footer>
        <p>&copy; Cristian Garcia 2018</p>
      </footer>


      </div>
    )
  }
}

let none={
display: "none",
};

let show ={
  display: 'flex', 
  // display: '-webkit-box',
}

export default App;
