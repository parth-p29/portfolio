// import './Project.css';

// const Project = (props) => {

//     return (
//         <a href={props.link} className="project-container" target="_blank">

//             <div className="project-image">
//                 <img src={props.image} /> 
//             </div>

//             <div className="p-info">
//                 <h3>{props.name}</h3>

//                 {/* <div className="skill-tags">
//                      <p>{props.s1}</p>
//                     <p>{props.s2}</p>
//                     <p>{props.s3}</p> 
                    
//                     <p>{props.text}</p>
//                 </div> */}
//             </div>
//         </a>
//     );
// }

// export default Project;

import './Project.css';

const Experience = (props) => {

    return (
        <a href={props.path} className="project">
            
            <a className="image">
                <img src={props.image} />
            </a>

            <div className="info">
                {/* <h3 className="e-title">Ceridian Software Developer</h3> */}
                <h3 className="e-title">{props.title}</h3>

                {/* <h2 className="role">Winter 2021 Internship with Ceridian on the Architecture team</h2> */}
                <h2 className="role">{props.role}</h2>

                {/* <div className="tags">
                    <h5>Backend</h5>
                    <h5>Architecture</h5>
                    <h5>DevOps</h5>
                </div> */}

                <div className="tags">
                    <h5 style={{backgroundColor: props.color}}>{props.s1}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s2}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s3}</h5>
                </div>

                {/* <p className="description">
                    Built multiple APIs and designed backend servies to help the company shift towards a micro-service architecture
                </p> */}

                <p className="description">
                    {props.desc}
                </p>

                <a href={props.path} className="e-link">
                    Check it out &#8594;
                </a>
            </div>

            {/* <div className="image">
                <img src={Ceridianimg} />
            </div> */}
        </a>
    );
}

export default Experience;