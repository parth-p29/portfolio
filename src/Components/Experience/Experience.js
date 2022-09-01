import './Experience.css';

const Experience = (props) => {

    return (
        <a href={props.path} className="experience">
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

            <a className="image">
                <img src={props.image} />
            </a>
        </a>
    );
}

export default Experience;