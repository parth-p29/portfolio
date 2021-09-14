import pic from '../../Assests/intropic.jpg';
import './Intro.css';
import Typewriter from 'typewriter-effect';
import arrow from '../../Assests/down-arrow.png';
import Nav from '../Nav/Nav';

import video from './video.mp4';
import poster from './black.png';

const Intro = () => {

    return (

        // <div className="container" id="intro">

        //     <div className="Intro">

        //         <div className="info">

        //             <h1>Hey, I'm Parth!</h1>
                    
        //             <h5>I study&nbsp;<a class="link" target="_blank" href="https://syde.social/">Systems Design Engineering</a>&nbsp;at the University of Waterloo.</h5>
        //             <h5>I have a vast interest in software systems and aspire to create viable solutions aimed towards solving the problems faced by all kinds of people.</h5>
        //             <h5 id="l">Previously I interned as a&nbsp;
        //                 <div className="typing">
        //                         <Typewriter
        //                             options={{
        //                                 loop: true,
        //                                 cursor: "✍️",
        //                                 cursorClassName:"cursor",
        //                                 delay: 50,
        //                                 deleteSpeed: 10

        //                             }}

        //                             onInit={(tw) => {
                                        
        //                                 tw.typeString('<a class="job" target="_blank" href="https://www.ceridian.com/">Software Developer @ Ceridian</a>')
        //                                 tw.pauseFor(1000)
        //                                 tw.deleteChars(29)
        //                                 tw.pauseFor(200)

        //                                 //
        //                                 tw.typeString('<a class="job" target="_blank" href="https://www.reebee.com/">Backend Software Engineer @ Reebee</a>')
        //                                 tw.pauseFor(1000)
        //                                 tw.deleteChars(34)
        //                                 tw.pauseFor(200)

        //                                 //

        //                                 .start();

        //                             }}

        //                         />
        //                     </div>
        //             </h5>

        //         </div>

        //         <div className="image">
                    
        //             <img src={pic} />

        //         </div>     

        //     </div>

            // <div className="more-info" id="mi">
            //     <p>Check out my work below.</p>
            //     <img src={arrow} />
            // </div> 

        // </div>
        
        <section className="showcase">
            <Nav/>
        
            <video playsInline poster={poster} muted loop autoplay="autoplay">
                <source src={video} type="video/mp4"></source>    
            </video>  

            <div class="overlay"></div>

            <div class="text">
                <h2>SOFTWARE ENGINEER</h2>
                <h1>Parth Patel</h1>
                <h3>
                    <div className="typing">
                        <Typewriter
                            options={{
                                loop: true,
                                // cursor: "✍️",
                                // cursorClassName:"cursor",
                                delay: 50,
                                deleteSpeed: 10

                            }}

                            onInit={(tw) => {
                                
                                tw.typeString('<a class="job" target="_blank" href="https://www.ceridian.com/">Software Developer @ Ceridian</a>')
                                tw.pauseFor(3000)
                                tw.deleteChars(29)
                                tw.pauseFor(200)

                                //
                                tw.typeString('<a class="job" target="_blank" href="https://www.reebee.com/">Backend Software Engineer @ Reebee</a>')
                                tw.pauseFor(3000)
                                tw.deleteChars(34)
                                tw.pauseFor(200)

                                //

                                tw.typeString('<a class="job" target="_blank" href="https://teamwaterloop.ca/">Full Stack Developer @ Waterloop</a>')
                                tw.pauseFor(3000)
                                tw.deleteChars(32)
                                tw.pauseFor(200)

                                .start();

                            }}

                        />
                        </div>
                    </h3>
            </div>

            <div className="more-info" id="mi">
                <img src={arrow} />
            </div> 
        </section>
    )

}

export default Intro;