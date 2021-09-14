import './Home.css';
import Intro from '../../Components/Intro/Intro'
import Experience from '../../Components/Experience/Experience';
import Ceridianimg from '../../Assests/CeridianLogo.jpg';
import reebeeimg from '../../Assests/reebee.png';
import veximg from '../../Assests/vex.jpg';

import Project from '../../Components/Project/Project';

import diversify from '../../Assests/diversifyproj.jpg';
import companion from '../../Assests/Companion.jpg';
import fmb from '../../Assests/fmb.png';
import yv from '../../Assests/yearview.png';


const CeridianTitle = "Ceridian Software Developer";
const CeridianRole = "Winter 2021 Internship with Ceridian on the Architecture team";
const CeridianS1 = "Backend";
const CeridianS2 = "Architecture";
const CeridianS3 = "DevOps";
const CeridianDesc = "Built multiple APIs and designed backend servies to help the company shift towards a micro-service architecture";
const CeridianColor = "#09193D";
const CeridianImage = Ceridianimg;

const Home = () => {

    return (
        <>
            <Intro/> 

            <div className="title" id ="experience">
                    <h1 >Work Experience</h1>
            </div> 

            <div className="exp">
                <Experience title={CeridianTitle} role={CeridianRole} s1={CeridianS1} s2={CeridianS2} s3={CeridianS3} desc={CeridianDesc} color={CeridianColor} image={CeridianImage} />
            </div>
{/* 
            <div className="title">
                    <h1>extracurriculars.</h1>
            </div>

            <div className="exp">
                <Experience link="/Waterloop" path={waterloop} name="Waterloop" color="rgb(0, 0, 0)" width="125px"/>
                <Experience link="/Vex" path={veximg} name="Vex Robotics" color="#DA262F" width="125px"/>
            </div>  */}

            <div className="title">
                    <h1>Projects</h1>
            </div>

            
            <div className="projs">
       
                <div className="proj1">
                    <Project s1="Python/Flask" s2="Pandas" s3="Azure" name="Diversify" link="https://github.com/parth-p29/Diversify" image={diversify}/>
                
                    <Project s1="ReactJS" s2="GCP" s3="Material UI" name="Find my Barber" image={fmb} link="https://github.com/parth-p29/findmybarber"/>
                </div>

                <div className="proj2">
                <Project s1="Flask" s2="MongoDB" s3="JavaScript" link="https://github.com/parth-p29/YearView" name="YearView" image={yv}/>
                    <Project s1="NodeJS" s2="ExpressJS" s3="Firebase" name="Companion" link="https://devpost.com/software/companion-m2lg9t" image={companion}/>

                </div>

            </div>

            <div className="more-projs">
                <a href="https://github.com/parth-p29?tab=repositories" target="_blank">
                    More Projects.
                </a>
            </div>

        </>
    );

}

export default Home;