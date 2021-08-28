import './Nav.css';
import logo from '../../Assests/parthlogo.jpg';

const Nav = () => {

    return (

        <nav>

            <div className="logo">

                <a href="/">
                    <img src={logo} />
                </a>
                
            </div>

            <div className="links">

                <a href="/">
                    work.
                </a>
                
                <a href="https://github.com/parth-p29?tab=repositories" target="_blank">
                    about.
                </a>

                <a href="https://drive.google.com/file/d/1QP89yaRDbK2uP0fFEfNwUkMhBXV0weac/view?usp=sharing" target="_blank">
                    resume.
                </a>

            </div>

        </nav>

    );

}

export default Nav;