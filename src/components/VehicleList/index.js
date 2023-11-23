import React, { useState } from 'react';
import useData from './useData';
import useIsMobile from './useIsMobile';
import VehicleCard from '../VehicleCard';
import DetailedVehicleModalCard from '../DetailedVehicleCard';
import Modal from '../Modal';
import './style.scss';

// to do lint everything after
export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  const handleCardClick = (vehicleID) => {
    const selectedVehicle = vehicles.find((v) => v.id === vehicleID);
    setActiveVehicle(selectedVehicle);
    openModal();
  };

  const carList = vehicles.map((car) => {
    return (
      <>
        <VehicleCard
          key={car.id}
          vehicle={car}
          mobile={isMobile}
          onClick={() => handleCardClick(car.id)}
        />
      </>
    );
  });

  return (
    <div data-testid="results">
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      {vehicles && (
        <>
          <div className="vehicleList">{carList}</div>
        </>
      )}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={<DetailedVehicleModalCard vehicle={activeVehicle} closeModal={closeModal} />}
      />
    </div>
  );
}
