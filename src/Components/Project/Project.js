import './Project.css';

const Project = (props) => {

    return (
        <a href="" className="project-container">

            <div className="project-image">

                <img src={props.image} /> 

            </div>

            <div className="p-info">
                <h3>Diversify</h3>

                <div className="skill-tags">
                    <p>Flask</p>
                    <p>Flask</p>
                    <p>Flask</p>
                </div>
            </div>

        </a>
    );

}

export default Project;