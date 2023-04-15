import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import r1 from '../../Assests/v1.jpg'
import r2 from '../../Assests/v2.jpg'
import r3 from '../../Assests/v3.jpg'
import r4 from '../../Assests/v4.jpg';
import r5 from '../../Assests/v5.jpg';
import r6 from '../../Assests/v6.jpg';

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
        height: 14
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
    }
]

const Vidyard = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Vidyard Internship</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: Node.js/Express, TypeScript, Ruby/Sidekiq, GraphQL, AWS, Vue.js 
                        </p>

                        <ul>
                            <li>Interned as a Software Developer Intern for the Winter 2023 term</li>
                            <li>Vidyard is a video hosting and analytics SaaS platform that enables businesses to create, host, analyze, and share video content</li>
                            <li>Joined the Integrations Team to provide backend services helping grow our partnerships with other companies (e.g. Salesforce, HubSpot)</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Vidyard</p>
                     <Gallery photos={photos} direction={"column"} />
            </div>

        </>
    )

}

export default Vidyard;