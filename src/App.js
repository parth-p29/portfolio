import './App.css';

import Nav from './Components/Nav/Nav';
import Intro from './Components/Intro/Intro';
import Experience from './Components/Experience/Experience';
import Particles from 'react-particles-js';
import Ceridianimg from '../src/Assests/CeridianLogo.jpg';
import reebeeimg from '../src/Assests/reebee.png';
import veximg from '../src/Assests/vex.jpg';


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

	<div className="title">
			<h1 >work experience.</h1>
	</div>

	<div className="exp">
		<Experience link="" path={reebeeimg} color="#008CFF" width="105px"/>
		<Experience link="" path={Ceridianimg} color="#09193D" width="130px"/>
	</div>

	<div className="title">
			<h1 >extracurriculars.</h1>
	</div>

	<div className="exp">
		<Experience link="" path={veximg} color="#DA262F" width="125px"/>
	</div>


    </>
  )

}

export default App;