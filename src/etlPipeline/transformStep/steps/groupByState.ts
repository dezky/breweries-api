import { BreweryWithRegion } from '../../../types';

const sortByCreatedAt = (breweries: BreweryWithRegion[]) =>
  [...breweries].sort(
    (brew1, brew2) => new Date(brew2.createdAt).getTime() - new Date(brew1.createdAt).getTime()
  );

export const groupByState = (breweries: BreweryWithRegion[]) => {
  const breweriesSorted = sortByCreatedAt(breweries);

  return breweriesSorted.reduce((previousValue, currentBrewery) => {
    if (!previousValue[currentBrewery.state]) {
      previousValue[currentBrewery.state] = [];
    }
    previousValue[currentBrewery.state].push(currentBrewery);

    return previousValue;
  }, {} as Record<string, BreweryWithRegion[]>);
};
