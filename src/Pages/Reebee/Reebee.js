import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import r1 from '../../Assests/roffice.jpg'
import r2 from '../../Assests/r2.jpg'
import r3 from '../../Assests/r3.jpg'
import r4 from '../../Assests/rr1.jpg';
import r5 from '../../Assests/rr2.jpg';

// import cpic1 from './cpics/cpic1.jpg';
// import cpic2 from './cpics/cpic2.JPG';
// import cpic3 from './cpics/cpic3.JPG';
// import cpic4 from './cpics/cpic4.jpg';
// import cpic6 from './cpics/cpic6.jpg';
// import cpic7 from './cpics/cpic7.PNG';

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

//     {
//         src: cpic7,
//         width: 15,
//         height: 18
//     }

//   ];


const Reebee = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Reebee Internship (Fall 2021)</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: PHP, Golang, AWS, MySQL, Postman, Jira
                        </p>

                        <ul>
                            <li>Working as a Backend Software Engineer for the Fall 2021 term</li>
                            <li>Joined the backend product team to develop and optimze new features for Reebee's mobile/web application</li>
                            <li>Developed an internal tool to efficiently share items across 650,000+ flyer pages in seconds using PHP and MySQL</li>
                            <li>Saved the company over $10,000 by creating a fail-over environment on AWS to leverage traffic during an Amazon outage</li>
                            <li>Mitigated 100+ errors and reduced memory usage by up to 18% through refactoring the codebase with PHPStan</li>
                            <li>Automated the user engagement system to filter, group and pass daily emails to Zendesk for easy management</li>
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