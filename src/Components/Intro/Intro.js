import pic from '../../Assests/intropic.jpg';
import './Intro.css';
import Typewriter from 'typewriter-effect';
import arrow from '../../Assests/down-arrow.png';

const phrases = [
    "I'm Parth.",
    "I'm a software engineer.",
    "I'm a problem-solver.",
]

const Intro = () => {

    return (

        <div className="container">
            <div className="Intro">

                <div className="info">

                    <h1>
                        Hey, I'm Parth!
                        {/* <div className="typing">
                            <Typewriter

                                onInit={(tw) => {
                                    
                                        tw.typeString('Parth!')
                                        tw.pauseFor(2000)
                                        tw.deleteChars(6)
                                        tw.pauseFor(1200)

                                        //
                                        tw.typeString('a software developer.')
                                        tw.pauseFor(2000)
                                        tw.deleteChars(19)
                                        tw.pauseFor(1200)

                                        //

                                        tw.typeString('designer.')
                                        tw.pauseFor(2000)
                                        tw.deleteChars(11)
                                        tw.pauseFor(1200)

                                        //

                                        tw.typeString('an explorer.')
                                        tw.pauseFor(2000)
                                        tw.deleteChars(11)
                                        tw.pauseFor(1200)

                                        //

                                        tw.typeString(' problem-solver.')
                                        tw.pauseFor(2000)
                                        tw.deleteChars(19)
                                        tw.pauseFor(1200)

                                        //
                                        
                                        .start();

                                }}

                            />
                        </div> */}
                    </h1>
                    
                    <h5>I study&nbsp;<a class="link" target="_blank" href="https://syde.social/">Systems Design Engineering</a>&nbsp;at the University of Waterloo.</h5>
                    <h5>I have a vast interest in software systems and aspire to create viable solutions aimed towards solving the problems faced by all kinds of people.</h5>
                    <h5>Previously I worked as a&nbsp;

                    <div className="typing">
                            <Typewriter
                                options={{
                                    loop: true,
                                    cursor: "✍️",
                                    cursorClassName:"cursor",
                                    delay: 50,
                                    deleteSpeed: 10

                                }}

                                onInit={(tw) => {
                                    
                                    tw.typeString('<a class="job" target="_blank" href="https://www.ceridian.com/">Software Developer @ Ceridian</a>')
                                    tw.pauseFor(1000)
                                    tw.deleteChars(29)
                                    tw.pauseFor(200)

                                    //
                                    tw.typeString('<a class="job" target="_blank" href="https://www.reebee.com/">Backend Software Engineer @ Reebee</a>')
                                    tw.pauseFor(1000)
                                    tw.deleteChars(34)
                                    tw.pauseFor(200)

                                    //

                                    .start();

                                }}

                            />
                        </div>
                    </h5>

                </div>

                <div className="image">
                    
                    <img src={pic} />

                </div>     

            </div>

            <div className="more-info">
                <p>check out my work below.</p>
                <img src={arrow} />
            </div> 

        </div>



    )

}

export default Intro;