import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import crimeDataJson from "../../data/crimeData.json";
import "./MapComponent.css";

// Function to return a custom marker icon based on crime type
const iconUrl = (type) => {
  const colorMap = {
    Robbery: "red",
    Assault: "blue",
    Homicide: "black",
    Kidnapping: "purple",
    Theft: "orange",
  };
  // Return the corresponding icon based on the crime type
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${colorMap[type] || "grey"}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
};

// Function to format the date-time string to a more readable format
const formatDateTime = (dateTimeStr) => {
  const parts = dateTimeStr.split('-');
  if (parts.length >= 5) {
    return `${parts[0]}-${parts[1]}-${parts[2]} ${parts[3]}:${parts[4]}`;
  }
  return dateTimeStr;
};

const MapComponent = () => {
  // State to hold the crime data and selected filters
  const [crimeData] = useState(crimeDataJson.crimes);
  const [filters, setFilters] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  // Extract unique report statuses for the dropdown filter
  const statusOptions = [...new Set(crimeData.map(crime => crime.report_status))];

  // Toggle function for selecting/deselecting crime type filters
  const toggleFilter = (type) => {
    setFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Handle changes in the report status filter
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters([]);
    setStatusFilter("");
  };

  // Calculate the count of each crime type for display
  const crimeCounts = crimeData.reduce((acc, crime) => {
    acc[crime.crime_type] = (acc[crime.crime_type] || 0) + 1;
    return acc;
  }, {});

  // Filter the crimes based on the selected filters and status filter
  const filteredCrimes = crimeData.filter(crime => 
    (filters.length === 0 || filters.includes(crime.crime_type)) &&
    (statusFilter === "" || crime.report_status === statusFilter)
  );

  return (
    <div>
      {/* Dashboard container for filters and map */}
      <div className="dashboard-container">
        <div className="filter-container">
          {/* Crime type filter section */}
          <div className="filters-container">
            <div className="filter-buttons-container">
              {Object.keys(crimeCounts).map((type) => (
                <button
                  key={type}
                  onClick={() => toggleFilter(type)} // Toggle filter on button click
                  className={`filter-button ${filters.includes(type) ? "active" : ""}`} // Add 'active' class if type is selected
                >
                  {type} ({crimeCounts[type]}) {/* Display crime type with count */}
                </button>
              ))}
            </div>

            {/* Report status filter dropdown */}
            <div className="status-filter">
              <select 
                value={statusFilter} 
                onChange={handleStatusFilterChange} // Update status filter on change
                className="status-select"
              >
                <option value="">All Statuses</option>
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              <button 
                onClick={resetFilters} // Reset all filters
                className="reset-button"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Map and stats container */}
        <div className="map-and-stats-container">
          <div className="map-container">
            {/* Map component from react-leaflet */}
            <MapContainer center={[23.588, 58.3829]} zoom={7} className="map">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* Render crime markers on the map based on filtered data */}
              {filteredCrimes.map((crime) => (
                <Marker key={crime.id} position={[crime.latitude, crime.longitude]} icon={iconUrl(crime.crime_type)}>
                  <Popup>
                    <div className="popup-content">
                      <h3 className="popup-title">{crime.crime_type}</h3>
                      <p className="popup-text">{crime.report_details}</p>
                      <p className="popup-text"><b>Reported:</b> {formatDateTime(crime.report_date_time)}</p>
                      <p className="popup-text"><b>Status:</b> {crime.report_status}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Crime statistics display */}
          <div className="stats-container">
            <h3>Crime Statistics</h3>
            <div className="stats-grid">
              {Object.entries(crimeCounts).map(([type, count]) => (
                <div key={type} className="stat-item">
                  <div className={`color-indicator ${type.toLowerCase()}`}></div> {/* Color indicator based on crime type */}
                  <span>{type}: {count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter summary showing the number of crimes being displayed */}
      <div className="filter-summary">
        <p><strong>Showing:</strong> {filteredCrimes.length} of {crimeData.length} crimes</p>
      </div>
    </div>
  );
};

export default MapComponent;
