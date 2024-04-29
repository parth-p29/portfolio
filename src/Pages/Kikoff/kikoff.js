import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import r1 from '../../Assests/kp1.jpg'
import r2 from '../../Assests/kp2.jpg'
import r3 from '../../Assests/kp3.jpg'
import r4 from '../../Assests/kp4.jpg';
import r5 from '../../Assests/kp5.jpg';
import r6 from '../../Assests/kp6.jpg';
import r7 from '../../Assests/kp7.jpg';
import r8 from '../../Assests/kp8.jpg';
import r9 from '../../Assests/kp9.jpg';
import r10 from '../../Assests/kp10.jpg';
import r11 from '../../Assests/kp11.jpg';
import r12 from '../../Assests/kp12.jpg';
import r13 from '../../Assests/kp13.jpg';
import r14 from '../../Assests/kp14.jpg';

const photos = [
    {
        src: r4,
        width: 40,
        height: 45
    },

    {
      src: r1,
      width: 15,
      height: 12

    },

    {
        src: r2,
        width: 20,
        height: 27
    },

    {
        src: r3,
        width: 18,
        height: 14
    },

    {
        src: r5,
        width: 15,
        height: 16
    },

    {
        src: r6,
        width: 18,
        height: 20
    },

    {
        src: r7,
        width: 20,
        height: 25
    },

    {
        src: r8,
        width: 18,
        height: 20
    },

    {
        src: r9,
        width: 15,
        height: 20
    },

    {
        src: r10,
        width: 18,
        height: 20
    },

    {
        src: r11,
        width: 20,
        height: 25
    },

    {
        src: r12,
        width: 18,
        height: 20
    },

    {
        src: r13,
        width: 20,
        height: 25
    },

    {
        src: r14,
        width: 18,
        height: 20
    }
]

const Kikoff = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Kikoff Internship</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: Ruby on Rails, Sidekiq, AWS, MySQL, Snowflake, React 
                        </p>

                        <ul>
                            <li>Interned as a Software Engineer Intern in San Francisco for the Fall 2023 term</li>
                            <li>Kikoff is a financial platform that provides tools to help people meet their financial goals</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Kikoff</p>
                     <Gallery photos={photos} direction={"column"} />
            </div>

        </>
    )

}

export default Kikoff;