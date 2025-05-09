import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    longitude: "",
    latitude: "",
    lender_count: "",
    popDensity: "",
    precipitation: "",
  });

  const [fundedAmount, setFundedAmount] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setFundedAmount(data.Funded_amount);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <div className="card">
          <h2 className="title">Predict Funded Amount</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <div className="input-group" key={key}>
                <input
                  className="input--style-1"
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${key}`}
                />
              </div>
            ))}
            <div className="p-t-20">
              <button className="btn" type="submit">Predict</button>
            </div>
          </form>

          {fundedAmount !== null && (
            <div className="result">
              <h4>Predicted Funded Amount: {fundedAmount}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
