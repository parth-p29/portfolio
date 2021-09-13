import './Nav.css';
import {Link} from 'react-scroll';
import resume from './Parth_Patel_Resume.pdf'

import { Component } from 'react';

class Nav extends Component{

    state = {
        color: 'none',
        opacity: '1'
    }

    listenScrollEvent = (x) => {

        if (window.scrollY > 400) {
            this.setState({color: "black", opacity: "0.63"})
        }

        else if (window.scrollY <= 10){
            this.setState({color: 'none', opacity: "1"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (

            <nav id="nav" style={{background: this.state.color, opacity: this.state.opacity}}>

                <div className="logo">

                    <a href="/">
                        PARTH PATEL
                    </a>
                    
                </div>

                <div className="links" >
                    
                    <Link to="footer" smooth={true} duration={1000} className="slink">
                        Contact
                    </Link>

                    <a href={resume} target="_blank">
                        Resume
                    </a>

                </div>

            </nav>

        );
    }

}

export default Nav;