import React from 'react';

import './style.scss';

const DetailedVehicleModalCard = ({vehicle, closeModal}) => {
  if (!vehicle || !vehicle.meta) {
    closeModal();
    return null; // or handle this case accordingly
  }

  const {id, media, price, description, meta} = vehicle;
  const {bodystyles, drivetrain, emissions, passengers} = meta;

  return (
    <article className="DetailedVehicleModalCard">
      <header className="DetailedVehicleModalCard__header">
        <h3>Jaguar {id}</h3>
        <button
          className="DetailedVehicleModalCard__closeButton"
          onClick={closeModal}
          type="button"
          aria-label="Close"
        >
          X
        </button>
      </header>
      <section className="DetailedVehicleModalCard__content">
        <img className="DetailedVehicleModalCard__image" alt={id} src={media[0].url} />
        <div className="DetailedVehicleModalCard__info">
          <p className="DetailedVehicleModalCard__description">{description}</p>
          <p>Body: {bodystyles.join(', ')}</p>
          <p>Drivetrain: {drivetrain.join(', ')}</p>
          <p>Price: {price}</p>
          <p>Passengers: {passengers}</p>
          <p>{emissions.template.replace('$value', emissions.value)}</p>
        </div>
      </section>
    </article>
  );
};

export default DetailedVehicleModalCard;
