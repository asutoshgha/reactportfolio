import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" where="IIIT Dharwad" from="July 2018" to="Present" cgpa="8.9" results="CGPA"/>
            <Widecard title="12th class" where="FIITJEE Junior College" from="2016" to="2018" results="Percentage" cgpa="97.3%"/>
            </div>
            )
        }
    }
    
export default Education
    