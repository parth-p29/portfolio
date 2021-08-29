import './Home.css';
import Intro from '../../Components/Intro/Intro'
import Experience from '../../Components/Experience/Experience';
import Ceridianimg from '../../Assests/CeridianLogo.jpg';
import reebeeimg from '../../Assests/reebee.png';
import veximg from '../../Assests/vex.jpg';
import Project from '../../Components/Project/Project';

const Home = () => {

    return (
        <>
            <Intro/>

            <div className="title">
                    <h1 >work experience.</h1>
            </div>

            <div className="exp">
                <Experience path={reebeeimg} link="/Reebee" color="#008CFF" width="105px"/>
                <Experience path={Ceridianimg} link="/Ceridian" color="#09193D" width="130px"/>
            </div>

            <div className="title">
                    <h1>extracurriculars.</h1>
            </div>

            <div className="exp">
                <Experience link="" path={veximg} color="#DA262F" width="125px"/>
            </div>

            <div className="title">
                    <h1>projects.</h1>
            </div>

            <div className="exp">
                <Project />
            </div>

        </>
    );

}

export default Home;