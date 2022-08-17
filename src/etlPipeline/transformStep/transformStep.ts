import { BreweryResponseItem } from '../../types';
import {
  addRegion,
  convertPropertiesToCamelCase,
  groupByState,
  removeNullProperties,
} from './steps';

export const transformBreweries = (breweries: BreweryResponseItem[]) => {
  const breweriesWithoutNullProperties = removeNullProperties(breweries);

  const breweriesWithCamelCaseProperties = convertPropertiesToCamelCase(
    breweriesWithoutNullProperties
  );

  const breweriesWithRegion = addRegion(breweriesWithCamelCaseProperties);

  const breweriesGroupedByState = groupByState(breweriesWithRegion);

  return breweriesGroupedByState;
};
