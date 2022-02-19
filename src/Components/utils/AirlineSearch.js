import React from "react";

const AirlineSearch = ({ slots, setFlightValue }) => {
  //   const [value, setvalue] = useState('');

  const flight_select = (value) => {
    switch (value) {
      case "1300":
        return "Morning Flight to Delhi";

      case "1800":
        return "Evening Flight to Mumbai";

      case "2100":
        return "Night Flight to Kolkata";

      default:
    }
  };

  const handleSelect = () => {
    const element = document.querySelector(".flight-searchlist");
    setFlightValue(element.value);
  };

  //console.log(Array.isArray(slots)); True

  return (
    <div className="searchbar-container">
      <select
        name="selected_flight"
        className="flight-searchlist"
        onChange={handleSelect}
      >
        <option value="none" selected disabled hidden>
          {slots?.length !== 0 ? "Select a Flight" : "No Flights Available"}
        </option>
        {slots?.map((slot, index) => (
          <option key={index} value={slot}>
            {flight_select?.(slot)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AirlineSearch;
