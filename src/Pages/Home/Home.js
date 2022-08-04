import './Home.css';
import Intro from '../../Components/Intro/Intro'

import Experience from '../../Components/Experience/Experience';
import Ceridianimg from '../../Assests/CeridianLogo.jpg';
import reebeeimg from '../../Assests/reebee.png';
import waterloop from '../../Assests/download.png';
import poliviews from '../../Assests/p4.png';
import odaia from '../../Assests/odaia.jpg';

import Project from '../../Components/Project/Project';
import diversify from '../../Assests/diversifyproj.jpg';
import companion from '../../Assests/Companion.jpg';
import yv from '../../Assests/yearview.png';

const CeridianTitle = "Software Developer @ Ceridian";
const CeridianRole = "Winter 2021 Internship with Ceridian on the Architecture Team";
const CeridianS1 = "C#";
const CeridianS2 = "Azure DevOps";
const CeridianS3 = "MongoDB";
const CeridianDesc = "Built multiple APIs and designed backend servies to help the company shift towards a micro-service architecture";
const CeridianColor = "#09193D";
const CeridianImage = Ceridianimg;
const CeridianPath = "/ceridian"

const oTitle = "Software Engineer @ ODAIA";
const oRole = "Summer 2022 Internship with ODAIA on the Infrastructure Team";
const oS1 = "Python";
const oS2 = "AWS";
const oS3 = "Docker";
const oDesc = "Redesigning AWS Lambda structure to ease development processes and improving maintainability of internal tools";
const oColor = "#0D0F19";
const oImage = odaia;
const oPath = "/odaia"

const ReebeeTitle = "Backend Software Engineer @ Reebee";
const ReebeeRole = "Fall 2021 Internship with Reebee on the Backend Team";
const ReebeeS1 = "PHP";
const ReebeeS2 = "MySQL";
const ReebeeS3 = "AWS";
const ReebeeDesc = "Optimizing API endpoints to handle millions of daily requests and aiding the transition from AWS to SnowflakeDB";
const ReebeeColor = "#008CFF";
const ReebeeImage = reebeeimg;
const ReebeePath = "/reebee";

const WaterloopTitle = "Full Stack Developer @ Waterloop";
const WaterloopRole = "Working as a Full Stack Developer on Waterloop's Web Team";
const WaterloopS1 = "NodeJS/Express";
const WaterloopS2 = "PostgreSQL";
const WaterloopS3 = "React";
const WaterloopDesc = "Joined Waterloop (Student Design Team) to provide full-stack services for developing server/client side features";
const WaterloopColor = "#041622";
const WaterloopImage = waterloop;
const WaterloopPath = "/waterloop";

const yvtype = "Passion Project";
const yvtitle = "YearView - Relive and Reflect on the Memories You've Made";
const yvs1 = "API Development";
const yvs2 = "MongoDB";
const yvs3 = "JavaScript";
const yvdesc = "Developed a secure photo-storage tool and authentication system that allows users to retain memories throughout a year";
const yvcolor = "#183249";
const yvpath = "https://github.com/parth-p29/YearView";

const dtype = "Recieved 1k+ Users";
const dtitle = "Diversify - Spotify Analytics and New Music Recommendations";
const ds1 = "Flask (Python)";
const ds2 = "Data Analysis";
const ds3 = "Azure";
const ddesc = "Built API endpoints that leveraged thousands of requests from around the world to analyze and display users' Spotify data";
const dcolor = "#8FE083";
const dpath = "https://diversify-application.herokuapp.com/";

const ctype = "Hackathon Project at nwHacks2021";
const ctitle = "Companion - A Social Network for Promoting Mental Health";
const cs1 = "NodeJS/Express";
const cs2 = "Firebase";
const cs3 = "Socket.io";
const cdesc = "A healthy social media network where users interact with others who are going through similar problems as themselves";
const ccolor = "#8977FF";
const cpath = "https://devpost.com/software/companion-m2lg9t";

const atype = "Hackathon Project at Hack the North";
const atitle = "PoliViews - A search engine that retrieves the latest info on politicians";
const as1 = "Flask API";
const as2 = "Beautiful Soup";
const as3 = "React";
const adesc = "Enter a phrase (e.g. climate change) and recieve the vision from each Canadian party leader regarding that query";
const acolor = "#FF7A90";
const apath = "https://devpost.com/software/poliviews";

const Home = () => {

    return (
        <>
            <Intro/> 

            <div className="title" id="experience">
                <h1>Places I've Worked...</h1>
            </div>  

            <div className="exp first">
                <Experience title={oTitle} role={oRole} s1={oS1} s2={oS2} s3={oS3} desc={oDesc} color={oColor} image={oImage} path={oPath} />
                <Experience title={ReebeeTitle} role={ReebeeRole} s1={ReebeeS1} s2={ReebeeS2} s3={ReebeeS3} desc={ReebeeDesc} color={ReebeeColor} image={ReebeeImage} path={ReebeePath} />
                <Experience title={CeridianTitle} role={CeridianRole} s1={CeridianS1} s2={CeridianS2} s3={CeridianS3} desc={CeridianDesc} color={CeridianColor} image={CeridianImage} path={CeridianPath} />
                <Experience title={WaterloopTitle} role={WaterloopRole} s1={WaterloopS1} s2={WaterloopS2} s3={WaterloopS3} desc={WaterloopDesc} color={WaterloopColor} image={WaterloopImage} path={WaterloopPath} />
            </div>

            <div className="title">
                <h1>Featured Projects</h1>
            </div>

            <div className="projs">
                    <Project title={dtype} role={dtitle} s1={ds1} s2={ds2} s3={ds3} desc={ddesc} color={dcolor} image={diversify} path={dpath} />
                    <Project title={atype} role={atitle} s1={as1} s2={as2} s3={as3} desc={adesc} color={acolor} image={poliviews} path={apath} />
                    <Project title={ctype} role={ctitle} s1={cs1} s2={cs2} s3={cs3} desc={cdesc} color={ccolor} image={companion} path={cpath} />
                    <Project title={yvtype} role={yvtitle} s1={yvs1} s2={yvs2} s3={yvs3} desc={yvdesc} color={yvcolor} image={yv} path={yvpath} />
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