import './Footer.css';
import github from './icons/github.svg';
import medium from './icons/medium.svg';
import email from './icons/email.svg';
import linkedin from './icons/linkedin.svg';

const Footer = () => {

    return (
        <footer id="footer">
            <div className="contacts">
                <a href="https://www.linkedin.com/in/parth-29/" target="_blank"> <img src={linkedin} /> </a>
                <a href="https://github.com/parth-p29" target="_blank"> <img src={github} /> </a>
                <a href="mailto: parth.patel@uwaterloo.ca" target="_blank"> <img src={email} /> </a>
                <a href="https://parth-patel10.medium.com/" target="_blank"> <img src={medium} /> </a>

                {/* <a href="https://www.linkedin.com/in/parth-29/" target="_blank"> linkedin. </a>
                <a href="https://github.com/parth-p29" target="_blank"> github. </a>
                <a href="mailto: parth.patel@uwaterloo.ca" target="_blank"> email. </a>
                <a href="https://parth-patel10.medium.com/" target="_blank"> medium. </a> */}
            </div>
        
            <div class="copyright">
                <p>2022 Parth Patel</p>
            </div>
        </footer>
    );
}

export default Footer;