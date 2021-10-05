import './Project.css';

const Project = (props) => {

    return (
        <a href={props.link} className="project-container" target="_blank">

            <div className="project-image">
                <img src={props.image} /> 
            </div>

            <div className="p-info">
                <h3>{props.name}</h3>

                {/* <div className="skill-tags">
                     <p>{props.s1}</p>
                    <p>{props.s2}</p>
                    <p>{props.s3}</p> 
                    
                    <p>{props.text}</p>
                </div> */}
            </div>
        </a>
    );
}

export default Project;