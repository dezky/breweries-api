import { BreweryResponseItem } from '../../../types';

const removeNullPropertiesFromBrewery = (brewery: BreweryResponseItem) => {
  const newBrewery = { ...brewery };
  Object.keys(brewery).forEach((breweryProperty) => {
    if (newBrewery[breweryProperty as keyof BreweryResponseItem] === null) {
      delete newBrewery[breweryProperty as keyof BreweryResponseItem];
    }
  });

  return newBrewery;
};

export const removeNullProperties = (breweries: BreweryResponseItem[]) =>
  breweries.map(removeNullPropertiesFromBrewery);
