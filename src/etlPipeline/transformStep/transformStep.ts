import { BreweryResponseItem } from '../../types';
import { convertPropertiesToCamelCase, groupByState, removeNullProperties } from './steps';

export const transformBreweries = (breweries: BreweryResponseItem[]) => {
  const breweriesWithoutNullProperties = removeNullProperties(breweries);

  const breweriesWithCamelCaseProperties = convertPropertiesToCamelCase(
    breweriesWithoutNullProperties
  );

  const breweriesGroupedByState = groupByState(breweriesWithCamelCaseProperties);

  return breweriesGroupedByState;
};
