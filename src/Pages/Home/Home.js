import './Home.css';
import Intro from '../../Components/Intro/Intro'
import Experience from '../../Components/Experience/Experience';
import Ceridianimg from '../../Assests/CeridianLogo.jpg';
import reebeeimg from '../../Assests/reebee.png';
import veximg from '../../Assests/vex.jpg';
import Project from '../../Components/Project/Project';

import diversify from '../../Assests/diversifyproj.jpg';
import companion from '../../Assests/Companion.jpg';

const Home = () => {

    return (
        <>
            <Intro/>

            <div className="title">
                    <h1 >experience.</h1>
            </div>

            <div className="exp">
                <Experience path={reebeeimg} name="Reebee Internship" link="/Reebee" color="#008CFF" width="105px"/>
                <Experience path={Ceridianimg} name="Ceridian Internship" link="/Ceridian" color="#09193D" width="130px"/>
                <Experience link="/Vex" path={veximg} name="Vex Robotics" color="#DA262F" width="125px"/>
            </div>

            {/* <div className="title">
                    <h1>extracurriculars.</h1>
            </div>

            <div className="exp">
                <Experience link="" path={veximg} name="Vex Robotics" color="#DA262F" width="125px"/>
            </div> */}

            <div className="title">
                    <h1>projects.</h1>
            </div>

            
            <div className="projs">
       
                <div className="proj1">
                    <Project image={diversify}/>
                    <Project image={diversify}/>
                </div>

                <div className="proj2">
                    <Project image={companion}/>
                    <Project image={companion}/>
                </div>

            </div>

        </>
    );

}

export default Home;