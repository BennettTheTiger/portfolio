import React,{ Component } from 'react';
import PrjCover from './PrjCover';
import ProjectNav from './ProjectNav';


let prjElements;
class WorkContainer extends React.Component{
    componentDidMount(){
        prjElements = document.getElementsByTagName('div');
        console.dir(prjElements);
    }
    render(){
    return(
        <div>
            <ProjectNav projects={prjElements}></ProjectNav>
            <PrjCover title="Little Loop" sub="An interactive k'nex coaster!" bg="/assets/prjPlaceholder.jpg" name="PrjCover"/>
            <PrjCover title="Experience Adaptech" sub="An interactive trade show exhibit!" bg="/assets/adaptech.jpg" />
            <PrjCover title="Flight Controller" sub="A HTML5 Canvas Game!" bg="/assets/adaptech.jpg" />
            <PrjCover title="Adaptech Video" sub="Motion Graphics" bg="/assets/adaptech.jpg" />
            <PrjCover title="This Site" sub="React and SVG Filters" bg="/assets/adaptech.jpg" />
            <PrjCover title="Audio Visualizer" sub="HTML Canvas & JS" bg="/assets/adaptech.jpg" />
            <PrjCover title="Monroe County Parks" sub="App Design & Motion Graphics" bg="/assets/adaptech.jpg" />
            <PrjCover title="Open Source & The Web" sub="Single Page Site & Paper" bg="/assets/adaptech.jpg" />
            <PrjCover title="Food Finder" sub="A food locator app using the Google Places API" bg="/assets/adaptech.jpg" />
            <div style={{minHeight: '50vh',textAlign:'center',paddingTop:'20%'}}>
                <h2>More Cool Projects Expected Soon!</h2>
            </div>
        </div>
    )
    };
}
export default WorkContainer;