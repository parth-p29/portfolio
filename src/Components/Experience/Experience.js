import './Experience.css';

const Experience = (props) => {

    return (

        <div class="company" style={{backgroundColor: props.color}}>
            <img src={props.path} style={{width: props.width}}/>
        </div>
    );

}

export default Experience;