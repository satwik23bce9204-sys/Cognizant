import React, { useState } from "react";

function CurrencyConvertor() {

  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  function convert() {
    const result = (rupees / 90).toFixed(2);
    setEuro(result);
  }

  return (
    <div style={{ marginTop: "30px" }}>

      <h2>Currency Convertor</h2>

      <input
        type="number"
        placeholder="Enter Rupees"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <button
        onClick={convert}
        style={{ marginLeft: "10px" }}
      >
        Convert
      </button>

      <h3>Euro : {euro}</h3>

    </div>
  );
}

export default CurrencyConvertor;