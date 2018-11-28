import React, {Component} from 'react';
import '../Styles/prjCoverStyles.css';

let ButtonText = 'See More';
class PrjCover extends Component{
    constructor(props){
       super(props);
       this.toggleContent = this.toggleContent.bind(this);
       this.state = {showAll:false};
    }
    
    toggleContent(){
        this.setState({showAll:!this.state.showAll});
        if(this.state.showAll) ButtonText = 'See More' ;
        else ButtonText = 'See Less';
    }

    componentDidMount(){        
        console.log('project loaded in');
    }

    componentWillUnmount(){
        console.log('unmounted project');
    }
  

render(){
    const styleBg = {backgroundImage:`url(${this.props.bg})`}
    const showingAll = this.state.showAll;
    let appendedDiv;


    if(showingAll){
        appendedDiv = (
            <div className="aboutPrj">
                <i className="fas fa-times closeButton" onClick={this.toggleContent}></i>
                <h1>Yo im all the content for {this.props.title}</h1>
                <p></p>
            </div>
        )
    }
    else{
        //just place an empty Div
        appendedDiv = <div></div>
    }
    
    return(
        <div>
            <div className="coverImg" style={styleBg}>
                
            </div>
            <div className="titleText">
                    <h2 className="prjTitle">{this.props.title}</h2>
                    <h5 className="subText">{this.props.sub}</h5>
                    <button className="showButton" onClick={this.toggleContent}>{ButtonText}</button>
                </div>
            <div>
                {appendedDiv}
            </div>
        </div>
    );
 
}
    
}

export default PrjCover;