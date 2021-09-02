import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
// import cpic1 from './cpics/cpic1.jpg';
// import cpic2 from './cpics/cpic2.JPG';
// import cpic3 from './cpics/cpic3.JPG';
// import cpic4 from './cpics/cpic4.jpg';
// import cpic6 from './cpics/cpic6.jpg';
// import cpic7 from './cpics/cpic7.PNG';

// const photos = [
//     {
//       src: cpic1,
//       width: 15,
//       height: 12

//     },

//     {
//         src: cpic2,
//         width: 15,
//         height: 19
//     },

//     {
//         src: cpic3,
//         width: 18,
//         height: 14
//     },

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


const Reebee = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Reebee Internship (Fall 2021)</h1>
                </div>


                <div className="job-desc">
                        <p>
                            Technologies: PHP (Laravel), Golang, AWS, MySQL, Postman, Jira
                        </p>

                        <ul>
                            <li>Working as a Backend Software Engineer for the Fall 2021 term</li>
                            <li>Will join the backend product team to develop and optimze new features for their mobile/web application</li>
                        </ul>

                </div>
{/* 
                <p>Here are some pics of how it went (virtually)</p> */}

            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Reebee</p>
                    {/* <Gallery photos={photos} direction={"column"} />; */}
            </div>

        </>
    );

}

export default Reebee;