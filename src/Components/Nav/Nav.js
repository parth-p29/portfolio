import './Nav.css';
import logo from '../../Assests/parthlogo.jpg';
import {Link} from 'react-scroll';

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
                    contact.
                </Link>

                <a href="https://drive.google.com/file/d/1QP89yaRDbK2uP0fFEfNwUkMhBXV0weac/view?usp=sharing" target="_blank">
                    resume.
                </a>

            </div>

        </nav>

    );

}

export default Nav;