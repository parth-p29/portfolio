import './App.css';

import Nav from './Components/Nav/Nav';
import Ceridian from './Pages/Ceridian/Ceridian';
import Reebee from './Pages/Reebee/Reebee';
import Odaia from './Pages/Odaia/odaia';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Waterloop from './Pages/Waterloop/Waterloop';
import Footer from './Components/Footer/Footer';
import Vidyard from './Pages/Vidyard/vidyard';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (
	<BrowserRouter baseline="/">
		<Nav/>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/ceridian" component={Ceridian} />
			<Route path="/About" component={About} />
			<Route path="/reebee" component={Reebee} />
			<Route path="/vidyard" component={Vidyard} />
			<Route path="/odaia" component={Odaia} />
			<Route path="/waterloop" component={Waterloop} />
		</Switch>
		<Footer/>
    </BrowserRouter>
  )
}

export default App;