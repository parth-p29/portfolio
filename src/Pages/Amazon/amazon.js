import '../Ceridian/Ceridian.css';
import Gallery from "react-photo-gallery";
import r1 from '../../Assests/ap1.JPG'
import r2 from '../../Assests/ap2.JPG'
import r3 from '../../Assests/ap3.JPG'
import r4 from '../../Assests/ap4.jpg'
import r5 from '../../Assests/ap5.jpg'
import r6 from '../../Assests/ap6.jpg'


const photos = [
    {
        src: r1,
        width: 50,
        height: 60
    },

    {
      src: r2,
      width: 30,
      height: 45

    },

    {
        src: r3,
        width: 20,
        height: 25
    },

    {
        src: r4,
        width: 75,
        height: 60
    },

    {
        src: r5,
        width: 30,
        height: 45
    },

    {
        src: r6,
        width: 30,
        height: 45
    },

    // {
    //     src: r3,
    //     width: 18,
    //     height: 14
    // },

    // {
    //     src: r5,
    //     width: 15,
    //     height: 16
    // },

    // {
    //     src: r6,
    //     width: 18,
    //     height: 20
    // },

    // {
    //     src: r7,
    //     width: 20,
    //     height: 25
    // },

    // {
    //     src: r8,
    //     width: 18,
    //     height: 20
    // }
]

const Amazon = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Amazon Internship</h1>
                </div>

                <div className="job-desc">
                        <p>
                            Technologies: Java, SQL, AWS
                        </p>

                        <ul>
                            <li>Interning as a Software Development Engineer in Vancouver for the summer 2024 term</li>
                            <li>Will be working in the stores' organization to develop tooling that processes petabytes of data efficiently</li>
                        </ul>

                </div>
            </div>

            <div className="images">
                <p className='i'>Some pictures from working at Amazon</p>
                     <Gallery photos={photos} direction={"column"} />
            </div>

        </>
    )

}

export default Amazon;