import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import w1 from '../../Assests/w1.jpg'

// import cpic1 from './cpics/cpic1.jpg';
// import cpic2 from './cpics/cpic2.JPG';
// import cpic3 from './cpics/cpic3.JPG';
// import cpic4 from './cpics/cpic4.jpg';
// import cpic6 from './cpics/cpic6.jpg';
// import cpic7 from './cpics/cpic7.PNG';

const photos = [
    {
      src: w1,
      width: 15,
      height: 12

    }

    // {
    //     src: r2,
    //     width: 20,
    //     height: 14
    // },

    // {
    //     src: r3,
    //     width: 18,
    //     height: 14
    // }
]

//     {
//         src: cpic4,
//         width: 20,
//         height: 18
//     },

//     {
//         src: cpic6,
//         width: 15,
//         height: 16
//     },

//     {
//         src: cpic7,
//         width: 15,
//         height: 18
//     }

//   ];


const Waterloop = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Waterloop Full Stack Developer (Sep 2021 - Now)</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: NodeJS, Express, React, TypeScript
                        </p>

                        <ul>
                            <li>Working as a Full stack developer for Waterloo's hyperloop student design team</li>
                            <li>Will join the web team to develop frontend/backend features</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Reebee</p>
                     <Gallery photos={photos} direction={"column"} />; 
            </div>

        </>
    );

}

export default Waterloop;