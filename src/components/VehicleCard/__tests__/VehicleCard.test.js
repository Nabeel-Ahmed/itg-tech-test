import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VehicleCard from '..';

const mockVehicle = {
  id: 'fpace',
  modelYear: 'k17',
  media: [{ url: 'image-desktop.jpg' }, { url: 'image-mobile.jpg' }],
  price: '£40,000',
  description: "Jaguar's luxury performance SUV.",
};

test('renders a vehicle card', () => {
  const { getByText } = render(
    <VehicleCard vehicle={mockVehicle} mobile={false} />
  );
  expect(getByText('From £40,000')).toBeInTheDocument();

  // Check if vehicle name is rendered
  const vehicleNameElement = getByText('Jaguar fpace');
  expect(vehicleNameElement).toBeInTheDocument();

  // Check if price is rendered
  const priceElement = getByText('From £40,000');
  expect(priceElement).toBeInTheDocument();

  // Check if description is rendered
  const descriptionElement = getByText("Jaguar's luxury performance SUV.");
  expect(descriptionElement).toBeInTheDocument();
});
