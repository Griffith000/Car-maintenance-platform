import { Vehicle } from './types';

export const vehicles: Vehicle[] = [
  { id: 'clio', name: 'Renault Clio', year: '2018-2023' },
  { id: 'megane', name: 'Renault Megane', year: '2016-2023' },
  { id: 'captur', name: 'Renault Captur', year: '2019-2023' },
  { id: 'kadjar', name: 'Renault Kadjar', year: '2015-2023' },
  { id: 'scenic', name: 'Renault Scenic', year: '2016-2023' },
];

export const getVehicleById = (id: string) => {
  return vehicles.find(vehicle => vehicle.id === id);
};

export const getVehicles = () => vehicles;
