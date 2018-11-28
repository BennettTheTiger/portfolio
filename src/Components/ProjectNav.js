import React from 'react';
import '../Styles/prjNav.css';

const handleClick = () =>{
    console.log('clicked on something');
}


const ProjectNav = (props) =>{
    console.log(props.projects);
    return(
        <div className='projectNav'>
            <div className="prjDot">
                <div className="circle"></div><p className="prjText">Project Name</p>
            </div>
            <div className="prjDot">
                <div className="circle"></div><p className="prjText">Project Name</p>
            </div>
    
        </div>
    );
}

export default ProjectNav;