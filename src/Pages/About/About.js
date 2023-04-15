import './About.css';
import pic from "../../Assests/mypic.jpg";
import Gallery from "react-photo-gallery";

const About = () => {

    return (

        <>
            <div className='wrapper'>

                <div className="about-title">
                    <h1>About Me</h1>
                </div>

                <div className="about-header">

                    <div className='about-image'>
                        <img src={pic}/>

                    </div>

                    <div className='about-info'>
                        <p>
                            Hey! My name is Parth Patel and I'm an aspiring software engineer who loves building new things for the internet. 
                        </p>

                        <p>
                        I grew up in Toronto, Canada and discovered coding at ~14 years old. Ever since then, I enjoy working on interesting projects that can help people around the world.
                        </p>

                        <p>
                            I'm currently studying <a className="alink" href="https://uwaterloo.ca/future-students/programs/systems-design-engineering">Systems Design Engineering</a> at the University of Waterloo and constantly seeking new internship opportunities in SWE!
                        </p>
                    </div>
                </div>

                <hr className='about-break'></hr>

                <div className="about-title">
                    <h1>What I'm up to...</h1>
                </div>

                <div className='jot-note'>
                    <ul>
                        <li>
                            Finished my winter 2023 software developer internship at <a className="alink" href="https://www.vidyard.com/">Vidyard</a>, a company who develops Video SaaS tools to help users gain better outreach through powerful video technology!
                        </li>

                        <li>
                            Looking for internships in Fall 2023 or Summer 2024 in the realms of Software Development (Backend/Full-stack/Infra)
                        </li>

                        <li>
                            Starting my 3rd year (SYDE 3A term) at Waterloo Engineering in May!
                        </li>

                        <li>
                            Trying to get better at Tennis 🎾
                        </li>
                        <li>
                            Learning how to throw cards 🃏
                        </li>
                    </ul>
                </div>

                <hr className='about-break'></hr>

                <div className="about-title">
                    <h1>Let's Connect!</h1>
                </div>

                <div className='final-text'>
                    <div>
                        <p>Thanks for taking a look at my website :) </p>
                        <p>Feel free to connect with me on any of my socials below as I'm always down for a chat!</p>
                    </div>
                </div>
            </div>

        </>
    )

}

export default About;