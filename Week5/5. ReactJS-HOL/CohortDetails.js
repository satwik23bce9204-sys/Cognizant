import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    const cohort = props.cohort;

    return (
        <div className={styles.box}>

            <h3
                style={{
                    color:
                        cohort.currentStatus === "Ongoing"
                            ? "green"
                            : "blue"
                }}
            >
                {cohort.cohortCode}
            </h3>

            <p><b>Started On</b><br />
                {cohort.startedOn}
            </p>

            <p><b>Current Status</b><br />
                {cohort.currentStatus}
            </p>

            <p><b>Coach</b><br />
                {cohort.coach}
            </p>

            <p><b>Trainer</b><br />
                {cohort.trainer}
            </p>

        </div>
    );
}

export default CohortDetails;
