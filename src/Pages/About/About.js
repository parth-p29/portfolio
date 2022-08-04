import './About.css';
import pic from "../../Assests/dp2.jpg";
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
                            I'm currently studying <a className="alink" href="https://uwaterloo.ca/future-students/programs/systems-design-engineering">Systems Design Engineering</a> at the University of Waterloo and constantly seeking new internship opportunities!
                        </p>


                        
                    </div>
                </div>
            </div>

        </>
    )

}

export default About;