import pic from '../../Assests/intropic.jpg';
import './Intro.css';
import Typewriter from 'typewriter-effect';

const phrases = [
    "I'm Parth.",
    "I'm a software engineer.",
    "I'm a problem-solver.",
]

const Intro = () => {

    return (

        <div className="Intro">

            <div className="info">

                <h1>
                    Hey👋, I'm Parth!
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
                
                <p>I study <a href="https://syde.social/">Systems Design Engineering</a> at the University of Waterloo.</p>
                <p>I have a vast interest in software systems and aspire to create viable solutions aimed towards addressing the problems faced by various people.</p>
                <p>Previously I worked as a

                <div className="typing">
                        <Typewriter

                            onInit={(tw) => {
                                
                                    tw.typeString('<a class="ceridian" href="https://www.ceridian.com/">Software Developer @ Ceridian</a>')
                                    tw.pauseFor(2000)
                                    tw.deleteChars(29)
                                    tw.pauseFor(1200)

                                    //
                                    tw.typeString('<a class="reebee" href="https://www.reebee.com/">Backend Software Engineer @ Reebee</a>')
                                    tw.pauseFor(2000)
                                    tw.deleteChars(34)
                                    tw.pauseFor(1200)

                                    //

                                    .start();

                            }}

                        />
                    </div>
                </p>

            </div>

            <div className="image">
                
                <img src={pic} />

            </div>


        </div>


    )

}

export default Intro;