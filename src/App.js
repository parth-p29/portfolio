import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import MainPage from './Pages/MainPage/MainPage';
 import Nav from './Components/Nav/Nav';
 import Intro from './Components/Intro/Intro';
 import Particles from 'react-particles-js';
// import Login from './Pages/LoginPage/LoginPage';

function App() {

  return (

    <>


    <Nav/>
    
    {/* <Particles
    canvasClassName="example"
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
          "color":{
            "value": "random"
          },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} /> */}

<Intro/>

    </>
  )

}

export default App;