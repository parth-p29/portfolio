import './Ceridian.css';
import Gallery from "react-photo-gallery";
import cpic1 from './cpics/cpic1.jpg';
import cpic2 from './cpics/cpic2.JPG';
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
                    <h1>Ceridian Internship (Winter 2021)</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: C#, SQL, MongoGB, Azure, Postman, Kubernetes/Docker 
                        </p>

                        <ul>
                            <li>Interned as a Software Developer on the architecture team and helped the company transition into a micro-service design</li>
                            <li>Built REST APIs with C# that allowed developers to easily retrive app configurations in seconds from MongoDB</li>
                            <li>Increased code coverage from 53% to over 90% with unit testing in Xunit that ensured correctly functioning code</li>
                            <li>Lowered app failures by 96% through developing a retry policy within API calls to automatically re-send failed requests</li>
                            <li>Built CI/CD pipelines with Azure DevOps to deploy containerized apps to several Kubernetes clusters in production</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pics from working at Ceridian</p>
                    <Gallery photos={photos} direction={"column"} />;
            </div>

        </>
    );

}

export default Ceridian;