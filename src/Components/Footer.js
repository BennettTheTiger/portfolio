import React from 'react';
import '../Styles/footerStyles.css';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
    <div className="footer">
          <a href="https://www.linkedin.com/in/bennett-schoonerman-1b6974105/" target="new"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/BennettTheTiger" target="new"><i className="fab fa-github-square"></i></a>
          <a href="https://codepen.io/Bennett96/" target="new"><i className="fab fa-codepen"></i></a>
          <a href="mailto:bas9386@rit.edu?subject=Hey Bennett!"><i className="fas fa-envelope-square"></i></a>
          
          
          <p>Built By Bennett<span role="img" aria-label="">👨‍💻</span>{year}</p>
          
    </div>
      )
    }

export default Footer;
