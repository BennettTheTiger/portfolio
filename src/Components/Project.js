import Anime from 'react-anime';
import React from 'react';

const Project = (props) =>{

        //if a link prop was passed in then make a link icon
        const makeYouTube = () =>{
            if(props.youtube) return <a href={props.youtube} target='new'><i className="fab fa-youtube-square fa-2x"></i></a>
        }
        const makeGit = () =>{
            if(props.git) return <a href={props.git} target='new'><i className="fab fa-github-square fa-2x"></i></a>
        }
        const makeLink = () =>{
            if(props.link) return <a href={props.link} target='new'><i className="fas fa-external-link-square-alt fa-2x"></i></a>
        }

        //build a container with the links
        const links = <div className="links centered">
                            {makeGit()}
                            {makeLink()}
                            {makeYouTube()}
                        </div>
  
        return(
            <div className="container-fluid">
                <div className="prjContainer" style={{ backgroundImage: `url(${props.bgURL})`}}/>
                <div id="titleTop">
                    <Anime key={Date.now() * Math.random()} 
                        translateX='-20px'
                        height='25px'
                        duration={2000} 
                        delay={200}
                        opacity={1}
                        width={props.title.length * 20} 
                        easing='easeInOutBack'>
                            <div className="blackBack"/>
                    </Anime>
                    <Anime delay={1000} duration={3000} opacity={1} key={Date.now() * Math.random()} >
                        <h1 className="text" id="title">{props.title}</h1>
                    </Anime>
                </div>
                <div className="align-content-center" id="subTop">
                    <Anime key={Date.now() * Math.random()} 
                        duration={3000}
                        width='350px'
                        height={props.subtitle.length * 2.5}
                        delay={1000}
                        opacity={1}
                        translateX='-10px'>
                        <div className="blackBack">
                            <Anime delay={1000} duration={3000} opacity={1} key={Date.now()} >
                            <h3 className="text" id="subTitle">{props.subtitle}</h3> 
                            </Anime>
                        </div>
                    </Anime> 
                </div>
                <Anime translateY='-80px' duration={2000} delay={1500} key={Date.now() * Math.random()} >
                {links}
                </Anime>
                
            </div>
        );
}

export default Project;