import React from 'react';
import Project from './Project';
import '../Styles/SliderStyles.css';

class ProjectContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeIndex: 0,
            allPrj:[],
            activePrj: <Project title="Little Loop" subtitle="Roller coaster automation with javascript" bgURL="/assets/coaster/thumb.png" link="https://bennettthetiger.github.io/littleLoopCoaster/"
            git="https://github.com/BennettTheTiger/littleLoopCoaster"  youtube="https://www.youtube.com/watch?v=EtbOQ72wHdU" />
        }

        this.nextProject = this.nextProject.bind(this);
        this.lastProject = this.lastProject.bind(this);
    }
    componentDidMount(){
        let allProjects = [];//an array of project elements
        allProjects.push(<Project 
                            title="Little Loop" 
                            subtitle="Roller coaster automation with javascript" 
                            bgURL="/assets/coaster/thumb.png" 
                            youtube="https://www.youtube.com/watch?v=EtbOQ72wHdU" 
                            link="https://bennettthetiger.github.io/littleLoopCoaster/"
                            git="https://github.com/BennettTheTiger/littleLoopCoaster"
                        />);
        allProjects.push(<Project title="Experience Adaptech" subtitle="Interactive Green Screen Trade Show Exhibit" bgURL="/assets/experiencePres/thumb.png" git="https://github.com/BennettTheTiger/AdaptechExperience"/>);
        allProjects.push(<Project title="Flight Controller" subtitle="A HTML5 Canvas Game!" bgURL="/assets/flightController/thumb.png" git="https://github.com/BennettTheTiger/FlightControllerGame"/>);
        allProjects.push(<Project 
            title="Adaptech Video" 
            subtitle="Videography & Motion Graphics" 
            bgURL="/assets/adaptechMotion/thumb.png"
            youtube="https://www.youtube.com/watch?v=8WgvdUYijBE"/>);
        allProjects.push(<Project title="This Site!" subtitle="React App & Anime.js" bgURL="/assets/this/thumb.png"/>);
        //allProjects.push(<Project title="Audio Visualizer" subtitle="HTML5 Canvas & Javascript" bgURL="/assets/bgtest.jpg"/>);
        allProjects.push(<Project title="Monroe County Parks" subtitle="App Design & Motion Graphics" bgURL="/assets/monroeParks/thumb.jpeg" youtube="https://www.youtube.com/watch?v=sO3d3RkAqNk" link="https://invis.io/K3BQ0D3A8"/>);
        allProjects.push(<Project title="Food Finder" subtitle="A food locator app using the Google Places API" bgURL="/assets/foodfinder/thumb.png" git="https://github.com/BennettTheTiger/foodFinder" link="https://bennettthetiger.github.io/foodFinder/"/>);
        allProjects.push(<Project title="Poolboi" subtitle="Pool and spa water management app in development" bgURL="/assets/poolboi/thumb.png" git="https://github.com/BennettTheTiger/PoolboiV2" link="https://poolboi.herokuapp.com/"/>);
        this.setState({allPrj:allProjects});
    }

    nextProject(){
        let desiredIndex = this.state.activeIndex;
        desiredIndex++;
        if(desiredIndex === this.state.allPrj.length) desiredIndex = 0;
        this.setState({activeIndex:desiredIndex});
        this.setState({activePrj:this.state.allPrj[desiredIndex]});
    }

    lastProject(){
        let desiredIndex = this.state.activeIndex;
        desiredIndex--;
        if(desiredIndex < 0) desiredIndex = this.state.allPrj.length - 1;
        this.setState({activeIndex:desiredIndex});
        this.setState({activePrj:this.state.allPrj[desiredIndex]});
    }
    render(){
    return(
        <div>
            <i className="fas fa-caret-left leftArrow" onClick={this.lastProject}></i>
            <div className="contentFrame">
                {this.state.activePrj}
            </div>
            <i className="fas fa-caret-right rightArrow" onClick={this.nextProject}></i>
        </div>
        );  
    };
}
export default ProjectContainer;