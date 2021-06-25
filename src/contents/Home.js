import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/asutoshgha.jpeg';
import Social from '../components/Social'
import '../styling/button.css';
//import DownloadButton from '../components/Download';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Asutosh Ghanto','I am a software engineering student']} speed={100} eraseDelay={700}/>
            <Social/>
            <a href={require("../img/asutoshgha.jpeg")} download="myFile" className="Button">Download Resume</a>
            </div>
            )
        }
    }
export default Home;
    