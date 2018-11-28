import React, { Component } from 'react';
import '../Styles/homeStyles.css';
import About from './About';
//cycle txt vars
const description = ['a Developer','a Designer','a Creator','an explorer','a Inventor','Curious','6`5``','easygoing','Personable','Musical','Motivated','Collaborative','Voted most Sincere','Excited you`re here!','Excited you`re here!','Excited you`re here!'];
let dynamicTxt;
let index = 0;

//cycle through words that describe me
const changeTxt = () =>{
  dynamicTxt.innerHTML = description[index];
  index++;
  if(index === description.length) index = 0;
}; 

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {time: false}
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({ time: Date.now() });//makes the component update because its state changes
      changeTxt();
    },2000);
    dynamicTxt = document.querySelector('#dynamicTxt');
  };  
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {  
    return (
    <div> 
        <div className="section">
          <div className="dynamicBox">
            <h1>Hi im Bennett</h1>
            <hr/>
            <h2>I'm <span id="dynamicTxt">Unique</span></h2>
          </div>
          <div style={{position:'absolute',bottom:'100px',fontSize:'1.75em',textAlign:'center',width:'100vw'}}>          
            <a href="#aboutSection"><i className="fa fa-angle-double-down"></i></a>
          </div>
        </div>
        <About id="aboutSection"/>
    </div>
      )
    }
}
export default Home;