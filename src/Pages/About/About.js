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

                <div className='about-break'></div>

                <div className="about-title">
                    <h1>What I'm up to...</h1>
                </div>

                <div className='jot-note'>
                    <ul>
                        <li>
                            <p>Completed my Fall 2023 software engineer internship at <a className="alink" href="https://www.kikoff.com/">Kikoff</a></p>
                        </li>

                        <li>
                            Looking for Summer 2024 internships in the realms of software engineering
                        </li>

                        <li>
                            Currently in third year (3B) at UWaterloo Systems Design Engineering
                        </li>

                        <li>
                            Trying to get better at Tennis 🎾
                        </li>
                        <li>
                            Learning how to throw cards 🃏
                        </li>
                    </ul>
                </div>

                {/* <hr className='about-break'></hr> */}

                <div className='about-break'></div>


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