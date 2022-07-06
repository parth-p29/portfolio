import './Nav.css';
import {Link} from 'react-scroll';
import resume from './Parth_Patel_Resume.pdf'

import { Component } from 'react';

class Nav extends Component{

    state = {
        color: 'none',
        opacity: '1',
        position: 'fixed',
        desc : true
    }

    listenLoadEvent = (x) => {
        if (window.location.pathname == "/ceridian" || window.location.pathname == "/reebee" || window.location.pathname == "/waterloop" || window.location.pathname == "/odaia") {
            // this.setState({position: 'relative', color: "#232323", opacity: "1", desc:false});
            this.setState({position: 'relative', color: "#232323", opacity: "1", desc:false});
            console.log(window.location.pathname);
        }

        else{
            this.setState({position: 'fixed', color: "none", opacity: "1", desc:true});
        }
    }

    listenScrollEvent = (x) => {

        if (window.scrollY > 50 && this.state.desc ) {
            this.setState({color: "black", opacity: "0.63", desc: this.state.desc})
        }

        else if (window.scrollY <= 10 && this.state.desc){
            this.setState({color: 'none', opacity: "1", desc: this.state.desc})
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.listenLoadEvent);
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        return (
            <nav id="nav" style={{background: this.state.color, opacity: this.state.opacity, position: this.state.position}}>
                <div className="logo">
                    <a href="/">
                        PARTH PATEL
                    </a>
                </div>

                <div className="links" >
                    {/* <a href="/about" target="_blank">
                        About
                    </a> */}

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