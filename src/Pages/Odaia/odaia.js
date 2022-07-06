import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";

import o1 from '../../Assests/o1.jpg'
import o2 from '../../Assests/o2.jpg'
import o3 from '../../Assests/o3.jpg'
import o4 from '../../Assests/o4.jpg'
import o5 from '../../Assests/o5.jpg'

const photos = [
    {
      src: o1,
      width: 12,
      height: 15

    },

    {
        src: o2,
        width: 14,
        height: 20
    },

    {
        src: o3,
        width: 16,
        height: 16
    },

    {
        src: o4,
        width: 30,
        height: 20
    },

    {
        src: o5,
        width: 16,
        height: 16
    }

  ];


const Odaia = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>ODAIA Internship</h1>
                </div>


                <div className="job-desc">
                    <p>
                        Technologies: Python, AWS, Docker, Bitbucket, Jira
                    </p>

                    <ul>
                        <li>Interned as a Software Engineer for the Summer 2022 term</li>
                        <li>ODAIA uses AI and big data to produce real-time analytics for pharma sales and marketing teams to engage with health-care providers</li>
                        <li>Joined the Infra team to redesign how Lambdas are tested/deployed locally and optimizing processes</li>
                    </ul>
                </div>
            </div>

            <div className="images">
                <p className='i'>Some pictures from working at ODAIA</p>
                    <Gallery photos={photos} direction={"column"} /> 
            </div>

        </>
    )

}

export default Odaia;