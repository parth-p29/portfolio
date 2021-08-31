import './Experience.css';

const Experience = (props) => {

    return (
        <a class="company" title={props.name} href={props.link} style={{backgroundColor: props.color}}>
            <img src={props.path} style={{width: props.width}}/>
        </a>
    );

}

export default Experience;