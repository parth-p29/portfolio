import './Intro.css';
import Typewriter from 'typewriter-effect';
import arrow from '../../Assests/down-arrow.png';
import Nav from '../Nav/Nav';
import video from './video.mp4';
import poster from './black.png';
import { Component } from 'react';

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }

    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }

    return "desktop";
};

const browserType = () => {

    var ua = navigator.userAgent.toLowerCase(); 
    
    if (ua.indexOf('safari') != -1) { 
        if (ua.indexOf('chrome') > -1) 
        {
            return "chrome" // Chrome
        } 
        
        else 
        {
            return "safari" // Safari
        }
    }
}

console.log(deviceType());
browserType();

class Intro extends Component{

    state = {
        marginb: '6.5rem'
    }
    
    listenLoadEvent = (x) => {

        if (browserType() == "safari" && (deviceType() == "tablet" || deviceType() == "mobile") ) {
            this.setState({marginb: "0.2rem"})
        }

        else{
            this.setState({marginb: "6.5rem"})
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.listenLoadEvent)
    }

    render() {
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
            
            // <section className="showcase" style={{marginBottom: this.state.marginb}}>
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
}

export default Intro;