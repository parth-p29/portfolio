import './Experience.css';

const Experience = (props) => {

    return (
        <a class="company" href={props.link} style={{backgroundColor: props.color}}>
            <img src={props.path} style={{width: props.width}}/>
        </a>
    );

}

export default Experience;