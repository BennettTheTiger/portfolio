import React, { Component } from 'react';
import Resume from './Resum\u00E9';

import '../Styles/contactStyles.css';

class ContactContainer extends Component{ 

    //wire up the over states for the icons
    componentDidMount(){
    const helpTxt = document.querySelector('#helpTxt');
    const icons = document.getElementsByClassName('icon');
    Array.from(icons).forEach((icon,index) =>{
        icons[index].addEventListener('mouseover',()=>{
            helpTxt.innerHTML = icon.getAttribute('data-helptxt');
        });
        icons[index].addEventListener('mouseleave',()=>{
            helpTxt.innerHTML = '';
        });
    });
    }

    render(){
        return(
            <div className="container-fluid">
                
                <div className="socialLinks">
                    <a href="https://www.linkedin.com/in/bennett-schoonerman-1b6974105/" target="new"><i className="fab fa-linkedin icon" data-helptxt="View my professional and academic accomplishments."></i></a>
                    <a href="https://github.com/BennettTheTiger" target="new"><i className="fab fa-github-square icon" data-helptxt="Check out some of my coding projects!"></i></a>
                    <a href="https://codepen.io/Bennett96/" target="new"><i className="fab fa-codepen icon" data-helptxt="Peek at some of my front end experiments."></i></a>
                    <a href="mailto:bas9386@rit.edu?subject=Hey Bennett!"><i className="fas fa-envelope-square icon" data-helptxt="Send me an email at bas9386@rit.edu"></i></a>
                    <a href="tel:3155765496"><i className="fas fa-phone-square icon" data-helptxt="Lets chat!"></i></a> 
                    <div className="helpContainer">
                        <p id="helpTxt"></p>
                    </div>
                </div>
                <h2 style={{textAlight:'center', width:'100vw'}}>Lets get in touch.</h2>
                <Resume/>
            </div>
        );
    }   
}



export default ContactContainer;