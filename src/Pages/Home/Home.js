import './Home.css';
import Intro from '../../Components/Intro/Intro'

import Experience from '../../Components/Experience/Experience';
import Ceridianimg from '../../Assests/CeridianLogo.jpg';
import reebeeimg from '../../Assests/reebee.png';
import waterloop from '../../Assests/waterloop.png';

import Project from '../../Components/Project/Project';
import diversify from '../../Assests/diversifyproj.jpg';
import companion from '../../Assests/Companion.jpg';
import yv from '../../Assests/yearview.png';
import htn from '../../Assests/p4.png';

const CeridianTitle = "Ceridian Software Developer";
const CeridianRole = "Winter 2021 Internship with Ceridian on the Architecture Team";
const CeridianS1 = "C#";
const CeridianS2 = "Azure DevOps";
const CeridianS3 = "MongoDB";
const CeridianDesc = "Built multiple APIs and designed backend servies to help the company shift towards a micro-service architecture";
const CeridianColor = "#09193D";
const CeridianImage = Ceridianimg;
const CeridianPath = "/ceridian"

const ReebeeTitle = "Reebee Backend Software Engineer";
const ReebeeRole = "Fall 2021 Internship with Reebee on the Backend Team";
const ReebeeS1 = "PHP";
const ReebeeS2 = "MySQL";
const ReebeeS3 = "AWS";
const ReebeeDesc = "Optimizing API endpoints to handle millions of daily requests and aiding the transition from AWS to SnowflakeDB";
const ReebeeColor = "#008CFF";
const ReebeeImage = reebeeimg;
const ReebeePath = "/reebee";

const WaterloopTitle = "Waterloop Full Stack Developer";
const WaterloopRole = "Working as a Full Stack Developer on Waterloop's Web Team";
const WaterloopS1 = "NodeJS/Express";
const WaterloopS2 = "PostgreSQL";
const WaterloopS3 = "React";
const WaterloopDesc = "Joined Waterloop (Student Design Team) to provide full-stack services for developing server/client side features";
const WaterloopColor = "#000000";
const WaterloopImage = waterloop;
const WaterloopPath = "/waterloop";

const yvtype = "Passion Project";
const yvtitle = "YearView - Relive and Reflect on the Memories You've Made";
const yvs1 = "API Development";
const yvs2 = "MongoDB";
const yvs3 = "JavaScript";
const yvdesc = "Joined Waterloop (Student Design Team) to provide full-stack services for developing server/client side features";
const yvcolor = "#000000";
const yvimage = waterloop;
const yvpath = "https://github.com/parth-p29/YearView";

const dtype = "600+ Unique Users";
const dtitle = "Diversify - Spotify Analytics and New Music Recommendations";
const ds1 = "Flask (Python)";
const ds2 = "Data Analysis";
const ds3 = "Azure";
const ddesc = "Joined Waterloop (Student Design Team) to provide full-stack services for developing server/client side features";
const dcolor = "#8FE083";
const dpath = "https://github.com/parth-p29/Diversify";

const ctype = "Hackathon Project at nwHacks2021";
const ctitle = "Companion - A Social Network for Promoting Mental Health";
const cs1 = "NodeJS/Express";
const cs2 = "Firebase";
const cs3 = "Socket.io";
const cdesc = "Joined Waterloop (Student Design Team) to provide full-stack services for developing server/client side features";
const ccolor = "#8977FF";
const cimage = waterloop;
const cpath = "https://devpost.com/software/companion-m2lg9t";

const Home = () => {

    return (
        <>
            <Intro/> 

            <div className="title" id="experience">
                <h1>Places I've Worked</h1>
            </div>  

            <div className="exp first">
                <Experience title={ReebeeTitle} role={ReebeeRole} s1={ReebeeS1} s2={ReebeeS2} s3={ReebeeS3} desc={ReebeeDesc} color={ReebeeColor} image={ReebeeImage} path={ReebeePath} />
                <Experience title={WaterloopTitle} role={WaterloopRole} s1={WaterloopS1} s2={WaterloopS2} s3={WaterloopS3} desc={WaterloopDesc} color={WaterloopColor} image={WaterloopImage} path={WaterloopPath} />
                <Experience title={CeridianTitle} role={CeridianRole} s1={CeridianS1} s2={CeridianS2} s3={CeridianS3} desc={CeridianDesc} color={CeridianColor} image={CeridianImage} path={CeridianPath} />
            </div>
 
            {/* <div className="title">
                    <h1>Extracurriculars</h1>
            </div>

            <div className="exp">
                <Experience title={WaterloopTitle} role={WaterloopRole} s1={WaterloopS1} s2={WaterloopS2} s3={WaterloopS3} desc={WaterloopDesc} color={WaterloopColor} image={WaterloopImage} path={WaterloopPath} />
                <Experience title={VexTitle} role={VexRole} s1={VexS1} s2={VexS2} s3={VexS3} desc={VexDesc} color={VexColor} image={VexImage} path={VexPath} />
            </div>    */}

            <div className="title">
                <h1>Some Things I've Built</h1>
            </div>

            <div className="projs">
                    <Project title={dtype} role={dtitle} s1={ds1} s2={ds2} s3={ds3} desc={ddesc} color={dcolor} image={diversify} path={dpath} />
                    <Project title={ctype} role={ctitle} s1={cs1} s2={cs2} s3={cs3} desc={cdesc} color={ccolor} image={companion} path={dpath} />
                    
                    <Project title={yvtype} role={yvtitle} s1={yvs1} s2={yvs2} s3={yvs3} desc={yvdesc} color={yvcolor} image={yv} path={yvpath} />
                    {/* <Project text="Spotify Analytics and Music Recommendations" name="Spotify Analytics and Music Recommendations" link="https://github.com/parth-p29/Diversify" image={diversify}/>
                    <Project text="Helping Canadians learn about Political Parties" name="Helping Canadians learn about Political Parties" image={htn} link="https://devpost.com/software/poliviews?ref_content=user-portfolio&ref_feature=in_progress"/> */}
 
            </div> 

            <div className="more-projs">
                <a href="https://github.com/parth-p29" target="_blank">
                    More Projects &#8594;
                </a>
            </div> 
        </>
    );
}

export default Home;