import './Home.css';
import Intro from '../../Components/Intro/Intro'

import Experience from '../../Components/Experience/Experience';
import Ceridianimg from '../../Assests/CeridianLogo.jpg';
import reebeeimg from '../../Assests/reebee.png';
import veximg from '../../Assests/vex.jpg';
import waterloop from '../../Assests/waterloop.png';

import Project from '../../Components/Project/Project';
import diversify from '../../Assests/diversifyproj.jpg';
import companion from '../../Assests/Companion.jpg';
import fmb from '../../Assests/fmb.png';
import yv from '../../Assests/yearview.png';

const CeridianTitle = "Ceridian Software Developer";
const CeridianRole = "Winter 2021 Internship with Ceridian on the Architecture Team";
const CeridianS1 = "Backend";
const CeridianS2 = "Architecture";
const CeridianS3 = "DevOps";
const CeridianDesc = "Built multiple APIs and designed backend servies to help the company shift towards a micro-service architecture";
const CeridianColor = "#09193D";
const CeridianImage = Ceridianimg;
const CeridianPath = "/ceridian"

const ReebeeTitle = "Reebee Backend Software Engineer";
const ReebeeRole = "Fall 2021 Internship with Reebee on the Backend Team";
const ReebeeS1 = "Backend";
const ReebeeS2 = "Cloud";
const ReebeeS3 = "Database Migration";
const ReebeeDesc = "Optimized APIs to manage millions of daily requests and helped transfer logs from AWS to SnowflakeDB";
const ReebeeColor = "#008CFF";
const ReebeeImage = reebeeimg;
const ReebeePath = "/reebee";

const WaterloopTitle = "Waterloop Full Stack Developer";
const WaterloopRole = "Working as a Full Stack Developer on Waterloop's Web Team";
const WaterloopS1 = "Frontend";
const WaterloopS2 = "Backend";
const WaterloopS3 = "Teamwork";
const WaterloopDesc = "Joined Waterloop (Student Design Team) to provide full-stack services for developing server/client side features";
const WaterloopColor = "#000000";
const WaterloopImage = waterloop;
const WaterloopPath = "/waterloop";

const VexTitle = "Vex Robotics Team 356 Developer/Mentor";
const VexRole = "Competed in provincial to global level robotics competitions";
const VexS1 = "Robotics (C++)";
const VexS2 = "Firmware";
const VexS3 = "Leadership";
const VexDesc = "Developed new robot functionalities and mentored members on team processess";
const VexColor = "#DA262F";
const VexImage = veximg;
const VexPath = "/vex";

const Home = () => {

    return (
        <>
            <Intro/> 

            <div className="title" id ="experience">
                    <h1>Work Experience</h1>
            </div> 

            <div className="exp">
                <Experience title={ReebeeTitle} role={ReebeeRole} s1={ReebeeS1} s2={ReebeeS2} s3={ReebeeS3} desc={ReebeeDesc} color={ReebeeColor} image={ReebeeImage} path={ReebeePath} />
                <Experience title={CeridianTitle} role={CeridianRole} s1={CeridianS1} s2={CeridianS2} s3={CeridianS3} desc={CeridianDesc} color={CeridianColor} image={CeridianImage} path={CeridianPath} />
                
            </div>

            <div className="title">
                    <h1>Extracurriculars</h1>
            </div>

            <div className="exp">
                <Experience title={WaterloopTitle} role={WaterloopRole} s1={WaterloopS1} s2={WaterloopS2} s3={WaterloopS3} desc={WaterloopDesc} color={WaterloopColor} image={WaterloopImage} path={WaterloopPath} />
                <Experience title={VexTitle} role={VexRole} s1={VexS1} s2={VexS2} s3={VexS3} desc={VexDesc} color={VexColor} image={VexImage} path={VexPath} />
            </div>  

            {/* <div className="title">
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

            </div> */}

            <div className="more-projs">
                <a href="https://github.com/parth-p29?tab=repositories" target="_blank">
                    More Projects
                </a>
            </div>

        </>
    );

}

export default Home;