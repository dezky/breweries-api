import { BreweryCamelCase, BreweryWithRegion } from '../../../types';

const getRegion = (latitude: number, longitude: number) => {
  // Out of EEUU
  if (latitude < 25 || latitude > 50 || longitude > -65 || longitude < -125) {
    return 'Unknown';
  }

  // West
  if (longitude < -105) {
    return 'West';
  }

  // Midwest
  if (longitude >= -105 && longitude < -80 && latitude > 37) {
    return 'Midwest';
  }

  // South
  if (longitude >= -105 && longitude < -75 && latitude < 37) {
    return 'South';
  }

  // Northeast
  if (longitude > -80 && latitude > 37) {
    return 'Northeast';
  }

  return 'Unknown';
};

const addRegionToBrewery = (brewery: BreweryCamelCase) => ({
  ...brewery,
  region: getRegion(
    Number.parseFloat(brewery.latitude ?? '0'),
    Number.parseFloat(brewery.longitude ?? '0')
  ),
});

export const addRegion = (breweries: BreweryCamelCase[]) => {
  const breweriesWithCoordinates = breweries.filter(
    (brewery) => brewery.latitude && brewery.longitude
  );

  return breweriesWithCoordinates.map(addRegionToBrewery) as BreweryWithRegion[];
};
