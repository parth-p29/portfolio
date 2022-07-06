import './Ceridian.css';
import Gallery from "react-photo-gallery";
import cpic1 from './cpics/cpic1.jpg';
import cpic3 from './cpics/cpic3.JPG';
import cpic4 from './cpics/cpic4.jpg';
import cpic6 from './cpics/cpic6.jpg';
import cpic7 from './cpics/cpic7.PNG';

const photos = [
    {
      src: cpic1,
      width: 15,
      height: 12

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

    {
        src: cpic7,
        width: 15,
        height: 18
    }

  ];


const Ceridian = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Ceridian Internship</h1>
                </div>


                <div className="job-desc">
                    <p>
                        Technologies: C#, MongoGB, Azure, Kubernetes/Docker, React
                    </p>

                    <ul>
                        <li>Interned as a Software Developer for the Winter 2021 term</li>
                        <li>Ceridian is a HCM leader and provides payroll via it's Dayforce application to millions of workers around the world</li>
                        <li>Joined the architecture team to aid the migration from a monolith to a mico-service design</li>
                    </ul>
                </div>
            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Ceridian</p>
                    <Gallery photos={photos} direction={"column"} />
            </div>

        </>
    )

}

export default Ceridian;