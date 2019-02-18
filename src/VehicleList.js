import React from "react";
// The prop-types library was installed using yarn. PropTypes is imported here, in the only file that uses it:
import PropTypes from "prop-types";

const VehicleList = ({ vehicleArray }) => {
  return vehicleArray.map(vehicle => (
    <div className="vehicle" key={vehicle.id}>
      <p>{`Make: ${vehicle.make}`}</p>
      <p>{`Model: ${vehicle.model}`}</p>
      <p>{`Color: ${vehicle.color}`}</p>
    </div>
  ));
};

// The syntax for PropTypes is tricky. Here we identify the component first and open some curlies, and then identify the only named prop (which is easy due to destructuring). The prop is an array, so we use .arrayOf and open some parentheses. The array contains objects, so we use .shape and open more parentheses and more curlies. Finally we can identify the contents of the objects, providing the expected value type of each property, and also requiring each one with .isRequired (our data is clean and complete* so requiring each piece of data makes sense). Note that after closing some brackets and parentheses, we required the array itself with a final .isRequired before closing the component's propTypes object.
// * I changed one vehicle's id from a number to a string (see vehicleArray.js) to demonstrate how PropTypes works. Note that no error is thrown in the yarn compiler or the "Problems" feature of VSCode. The error appears in the console of the app's web page (though the app still runs).

VehicleList.propTypes = {
  vehicleArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired
};

export default VehicleList;
