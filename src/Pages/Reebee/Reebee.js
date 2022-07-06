import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import r1 from '../../Assests/roffice.jpg'
import r2 from '../../Assests/r2.jpg'
import r3 from '../../Assests/r3.jpg'
import r4 from '../../Assests/rr1.jpg';
import r5 from '../../Assests/rr2.jpg';

const photos = [
    {
      src: r1,
      width: 15,
      height: 12

    },

    {
        src: r2,
        width: 20,
        height: 14
    },

    {
        src: r3,
        width: 18,
        height: 14
    },

    {
        src: r4,
        width: 20,
        height: 18
    },

    {
        src: r5,
        width: 15,
        height: 16
    }
]

const Reebee = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Reebee Internship</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: PHP, MySQL, AWS, Snowflake, Postman, Jira
                        </p>

                        <ul>
                            <li>Interned as a Backend Software Engineer for the Fall 2021 term</li>
                            <li>Reebee produces digital flyers from 1000s of stores, allowing millions of Candians to save money while shopping</li>
                            <li>Joined the backend product team to develop and optimze new features for Reebee's mobile/web application</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Reebee</p>
                     <Gallery photos={photos} direction={"column"} />
            </div>

        </>
    )

}

export default Reebee;