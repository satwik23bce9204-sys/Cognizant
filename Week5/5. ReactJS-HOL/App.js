import CohortDetails from "./Components/CohortDetails";

function App() {

  const cohorts = [
    {
      cohortCode: "INTADMDF10 -.NET FSD",
      startedOn: "22-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Aarthi",
      trainer: "Joy Jose"
    },
    {
      cohortCode: "ADMJ21014 - Java FSD",
      startedOn: "10-Sep-2021",
      currentStatus: "Ongoing",
      coach: "Apoorv",
      trainer: "Ria Smith"
    },
    {
      cohortCode: "CDBJF21025 - Java FSD",
      startedOn: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "Bhavitha",
      trainer: "John Doe"
    }
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1>Cohorts Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          cohort={cohort}
        />
      ))}
    </div>
  );
}

export default App;
