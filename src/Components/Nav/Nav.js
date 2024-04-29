import './Nav.css';
import {Link} from 'react-scroll';

import { Component } from 'react';

class Nav extends Component{

    state = {
        color: 'none',
        opacity: '1',
        position: 'fixed',
        desc : true,
        include_about: "initial",
        logo_text: "Pa",
        email: "parth.patel@uwaterloo.ca",
    }

    listenLoadEvent = (x) => {
        if (window.location.pathname == "/dayforce" || window.location.pathname == "/reebee" || window.location.pathname == "/waterloop" || window.location.pathname == "/odaia" || window.location.pathname == "/about" || window.location.pathname == "/vidyard" || window.location.pathname == "/kikoff" || window.location.pathname == "/amazon") {
            // this.setState({position: 'relative', color: "#232323", opacity: "1", desc:false});
            this.setState({position: 'relative', color: "#232323", opacity: "1", desc:false, logo_text: "👈"});
            console.log(window.location.pathname);
        }

        else{
            this.setState({position: 'fixed', color: "none", opacity: "1", desc:true});
        }

        if (window.location.pathname == "/about") {
            this.setState({include_about: "none"});
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

    sendResume = () => {
        alert("hello");
    } 

    render() {
        return (
            <nav id="nav" style={{background: this.state.color, opacity: this.state.opacity, position: this.state.position}}>
                <div className="logo">
                    <a href="/">
                        {this.state.logo_text}
                    </a>
                </div>

                <div className="links" >
                    <a href="/about"style={{display: this.state.include_about}}>
                        about.
                    </a>

                    <Link to="footer" smooth={false} duration={800} className="slink">
                        contact.
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Nav;