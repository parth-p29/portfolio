import './About.css';
import pic from "../../Assests/apic.jpg";
import Gallery from "react-photo-gallery";
import Song from '../../Components/Songs/Song';

const About = () => {

    return (

        <>
            <div className='wrapper'>
                <div className="about-header">

                    <div className='about-image'>
                        <img src={pic}/>

                    </div>

                    <div className='about-info'>
                        <div className='a-title'>
                            <h1>Hey, I'm Parth!</h1>
                        </div>
                        
                        <p>
                            I'm a software engineer with 3 years worth of professional experience and a passion of building new things for the internet. 
                        </p>

                        <p>
                            I grew up in Toronto, Canada and discovered coding at ~14 years old. Ever since then, I "developed" a passion for working on interesting projects that can be used by people around the world.
                        </p>

                        <p>
                            Along with software engineering, I'm also passionate about consulting/SEO and love to help businesses improve their presence on the web!
                        </p>

                        <p>
                            I'm currently in my fourth year of studying Systems Design Engineering at the University of Waterloo and currently seeking new grad SWE roles!
                        </p>
                    </div>
                </div>

                <div className='about-break'></div>

                <div className='jot-note-wrapper'>
                    <div className='block'>
                        <h3>🛠️ Areas of Expertise</h3>
                        <ul>
                            <li>Backend Development</li>
                            <li>Full-stack Development</li>
                            <li>Cloud Infrastructure</li>
                            <li>CI/CD Pipelines</li>
                            <li>Search Engine Optimization</li>
                            <li>Software Consulting</li>
                        </ul>
                    </div>

                    <div className='block'>
                        <h3>🏀 Personal Interests</h3>
                        <ul>
                            <li>Basketball (Go Raptors!)</li>
                            <li>Photography</li>
                            <li>Tennis</li>
                            <li>Gym</li>
                            <li>Music</li>
                        </ul>    
                    </div>
                </div>

                <div className='about-break'></div>

                <div className="about-title">
                    <h1>Songs on Repeat</h1>
                </div>

                <div className='song-wrapper'>
                    <div className='songs'>
                        <div className='song'>
                            <Song song_id={"38RoOyatCm5kpj3yhaIy99"}/>
                        </div>

                        <div className='song'>
                            <Song song_id={"1jhdCONafFj1hzJsPvZx27"}/>
                        </div>
                        <div className='song'>
                            <Song song_id={"7eQl3Yqv35ioqUfveKHitE"}/>
                        </div>
                    </div>
                </div>

                <div className='about-break'></div>

                <div className="about-title">
                    <h1>Lets Connect!</h1>
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