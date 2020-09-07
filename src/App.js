import React from 'react';
import './App.css';
import left from './left.png';
import right from './right.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProf: 'empty',
      displayProj: 'empty'
    };
    this.clickEffect = this.clickEffect.bind(this);
  }

  componentDidMount () {
  }

  clickEffect (e) {
    let clicked = e.target.className;
    let holder = document.querySelector('.photoHolder');
    this.setState({displayProf: 'empty'});
    if(clicked === 'left'){
      holder.style = 'transform: translateX(-50vw); transition: all .2s;';
      this.setState({displayProf: 'text'});
    } else {
      holder.style = 'transform: translateX(50vw); transition: all .2s;';
      this.setState({displayProj: 'textSmall'});
    }
  }

  render () {
    return (
      <div className="App">
        <Photo onClick={this.clickEffect} projects={this.state.displayProj} professional={this.state.displayProf}/>
      </div>
    );
  }
}

function Photo(props) {
  return (
    <div>
      <div className={props.projects}>
        <div className="heading">Projects:</div>
        <div className='grid'>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Etch-a-Sketch/" target="_blank">Etch-a-Sketch</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Calculator/" target="_blank">Calculator</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Pomodoro-Clock/" target="_blank">Pomodoro Clock</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Library/" target="_blank">Library</a><span>    /    </span><a href="https://Kevlar2222.github.io/library/" target="_blank">Library (React)</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Tic_Tac_Toe/" target="_blank">Tic Tac Toe</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Restaurant/dist/" target="_blank">Restaurant</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/ToDo/dist/" target="_blank">To Do List</a></div>
            <div><a href="https://Kevlar2222.github.io/weather-app" target="_blank">Weather App</a></div>
            <div><a href="https://Kevlar2222.github.io/battleships" target="_blank">Battleships</a></div>
            <div><a href="https://kevlar2222.github.io/identify-people/" target="_blank">Photo Tagger</a></div>
            <div><a href="https://kevlar2222.github.io/youtube/" target="_blank">Youtube</a></div>
            <div><a href="https://kevin-satti-projects.github.io/Projects/Sign_up_Page/" target="_blank">Sign up Page</a></div>
            <div><a href="https://kevlar2222.github.io/webcam-effects/" target="_blank">Webcam Effects</a></div>
        </div>
    </div>
    <div className="photoHolder">
      <div>
        <img className='left' src={left} alt='faceLeft' onClick={props.onClick}></img>
      </div>
      <div>
        <img className='right' src={right} alt='faceRight' onClick={props.onClick}></img>;
      </div>
      <div className={props.professional}>
        <div>
          <div className="heading">Professional:</div>
          <div className="grid2">
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascript</div>
            <div>React</div>
          </div>
        </div>
      </div>      
    </div>
    </div>
    
  );
}

export default App;
