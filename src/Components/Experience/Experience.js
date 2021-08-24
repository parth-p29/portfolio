import './Nav.css';
import logo from '../../Assests/parthlogo.jpg';

const Nav = (link) => {

    return (

        <div className="experience">

            <a href={link}>
                <div class="company">
                    <img src="Photos/CeridianLogo.jpg" />
                </div>
            </a>



        </div>

    );

}

export default Nav;