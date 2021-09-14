import './Experience.css';
import Ceridianimg from '../../Assests/CeridianLogo.jpg'
const Experience = (props) => {

    return (
        <section className="experience">
            <div className="info">
                <h3 className="e-title">Ceridian Software Developer</h3>
                <h2 className="role">Winter 2021 Internship with Ceridian on the Architecture team</h2>

                <div className="tags">
                    <h5>Backend</h5>
                    <h5>Architecture</h5>
                    <h5>DevOps</h5>
                </div>

                <p className="description">
                    Built multiple APIs and designed backend servies to help the company shift towards a micro-service architecture
                </p>

                <a href="/ceridian" className="e-link">
                    Check it out &#8594;
                </a>
            </div>

            <div className="image">
                <img src={Ceridianimg} />
            </div>
        </section>
    );
}

export default Experience;