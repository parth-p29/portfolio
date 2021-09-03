import './Nav.css';
import logo from '../../Assests/parthlogo.jpg';
import {Link} from 'react-scroll';

import resume from './Parth_Patel_Resume.pdf'

// const slide = () => {
//     const burger = document.querySelector('.burger');
//     const links = document.querySelector('.links');

//     burger.addEventListener('click', ()=>{
//         links.classList.toggle('transition');
//     });
// }

// slide();

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

                <a href={resume} target="_blank">
                    resume.
                </a>

            </div>

            <div className="burger">
                <div className="lin1"></div>
                <div className="lin2"></div>
                <div className="lin3"></div>
            </div>

        </nav>

    );

}

export default Nav;