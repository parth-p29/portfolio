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
                            Finished my summer 2022 software engineering internship at <a className="alink" href="https://www.odaia.ai/">ODAIA</a>, a company who develops software that helps sales reps in pharmaceutical companies engage with medical professionals!
                        </li>

                        <li>
                            Looking for internships in Winter or Fall 2023 in the realms of Software Development (backend or full stack)
                        </li>

                        <li>
                            Starting the second half of my second year (SYDE 2B term) in September!
                        </li>

                        <li>
                            Trying to get better at Tennis 🎾
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