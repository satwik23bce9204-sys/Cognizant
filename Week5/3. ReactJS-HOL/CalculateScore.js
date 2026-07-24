import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const average = props.total / props.goal;

    return (
        <div className="box">

            <h1>Student Score Calculator</h1>

            <h3>Name : {props.name}</h3>

            <h3>School : {props.school}</h3>

            <h3>Total Score : {props.total}</h3>

            <h3>Goal : {props.goal}</h3>

            <h2>Average Score : {average}</h2>

        </div>
    );
}

export default CalculateScore;
