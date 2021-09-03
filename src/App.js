import './App.css';

import Nav from './Components/Nav/Nav';
import Ceridian from './Pages/Ceridian/Ceridian';
import Reebee from './Pages/Reebee/Reebee';
import Vex from './Pages/Vex/Vex';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

import {HashRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (

	<HashRouter>
    
		<Nav/>

		<Switch>

			<Route path="/" exact component={Home} />
			<Route path="/Ceridian" component={Ceridian} />
			<Route path="/Reebee" component={Reebee} />
			<Route path="/Vex" component={Vex} />
			
		</Switch>

		<Footer />

    </HashRouter>

  )

}

export default App;