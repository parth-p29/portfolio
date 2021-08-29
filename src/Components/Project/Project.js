import './Project.css';
import diversify from '../../Assests/diversifyproj.jpg';


const Project = () => {

    return (
        <a href="" className="project-container">

            <div className="project-image">

                <img src={diversify} />

            </div>

            <div className="project-info">

                <h3>Helping users understand their music data and get to know themselves better</h3>

            </div>

        </a>
    );

}

export default Project;