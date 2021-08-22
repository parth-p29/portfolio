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

    <Intro/>
    
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1000,
            }
          },
        },
      }}
    />

    </>
  )

}

export default App;