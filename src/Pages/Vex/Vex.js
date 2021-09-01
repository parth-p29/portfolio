import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import cpic1 from '../../Assests/vexprovs.png';
import cpic2 from '../../Assests/vexworldsgroup.png';
import cpic3 from '../../Assests/worlds.JPG';
import cpic4 from '../../Assests/r1.JPG';
import cpic6 from '../../Assests/leviathan.png';

const photos = [
    {
      src: cpic1,
      width: 15,
      height: 12

    },

    {
        src: cpic2,
        width: 15,
        height: 19
    },

    {
        src: cpic3,
        width: 18,
        height: 14
    },

    {
        src: cpic4,
        width: 20,
        height: 18
    },

    {
        src: cpic6,
        width: 15,
        height: 16
    },

        // {
        //     src: cpic7,
        //     width: 15,
        //     height: 18
        // }

  ];


const Vex = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Vex Robotics Team 356A</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Skills: Robot C (C++), Leadership, Problem-solving
                        </p>

                        <ul>
                            <li> Won the Skills Champion and Provincial Design Awards out of 150+ contenders for having optimal robot performance</li>
                            <li> Raised self-driving scores by 63% through implementing a motion algorithm in C++ that effectively tracked robot position</li>
                            <li> Saved 50% of the annual budget by optimizing software functionalities that prevented battery failures after matches</li>
                            <li> Won the Skills Champion and Provincial Design Awards out of 150+ contenders for having optimal robot performance</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pics from Vex</p>
                    <Gallery photos={photos} direction={"column"} />; 
            </div>

        </>
    );

}

export default Vex;