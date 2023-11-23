import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const VehicleCard = ({ vehicle, mobile, onClick }) => {
  const {
    id, modelYear, media, price, description
  } = vehicle;

  const handleKeyPress = (event) => {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div
      role="button"
      type="button"
      key={id + modelYear}
      className="vehicleCard"
      onClick={onClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <img className="vehicleCard__image" alt={id} src={mobile ? media[1].url : media[0].url} />
      <div className="vehicleCard__description">
        <h3 className="vehicleCard__vehicleName">
          Jaguar
          {id}
        </h3>
        <span className="vehicleCard__price">
          From
          {price}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    modelYear: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default VehicleCard;
