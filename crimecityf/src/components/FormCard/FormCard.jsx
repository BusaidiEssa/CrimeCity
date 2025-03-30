import React, { useState } from "react";

const FormCard = () => {
  const [formData, setFormData] = useState({
    reportDetails: "",
    crimeType: "Assault",
    nationalId: "",
    longitude: "",
    latitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // add my sumbit logic here
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reportDetails">Report Details:</label>
          <input
            type="text"
            id="reportDetails"
            name="reportDetails"
            value={formData.reportDetails}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="crimeType">Crime Type:</label>
          <select
            id="crimeType"
            name="crimeType"
            value={formData.crimeType}
            onChange={handleChange}
          >
            <option value="Assault">Assault</option>
            <option value="Robbery">Robbery</option>
            <option value="Homicide">Homicide</option>
            <option value="Kidnapping">Kidnapping</option>
          </select>
        </div>

        <div>
          <label htmlFor="nationalId">National ID:</label>
          <input
            type="number"
            id="nationalId"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="longitude">Crime Location - Longitude:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="latitude">Crime Location - Latitude:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default FormCard;