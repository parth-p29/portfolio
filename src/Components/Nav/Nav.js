import './Nav.css';
import logo from '../../Assests/parthlogo.jpg';
import {Link} from 'react-scroll';

import resume from './Parth_Patel_Resume.pdf'

const Nav = () => {

    return (

        <nav id="nav">

            <div className="logo">

                <a href="/">
                    <img src={logo} />
                </a>
                
            </div>

            <div className="links" >
                
                <Link to="footer" smooth={true} duration={1000} className="slink">
                    Contact.
                </Link>

                <a href={resume} target="_blank">
                    Resume.
                </a>

            </div>

        </nav>

    );

}

export default Nav;