import officeImage from "./images/office.jpg";

function App() {

  const element = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Hyderabad"
    },
    {
      Name: "SmartWorks",
      Rent: 45000,
      Address: "Bangalore"
    }
  ];

  return (
    <div style={{ marginLeft: "170px", marginTop: "40px" }}>

      <h1>{element}, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="250"
        height="250"
      />

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h2>Name: {item.Name}</h2>

            <h3
              style={{
                color: item.Rent <= 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;