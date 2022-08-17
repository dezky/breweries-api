import { BreweryResponseItem } from '../types';
import { getAllBreweries } from './extractStep';
import { transformBreweries } from './transformStep';

export const etlPipeline = async () => {
  const inputData: BreweryResponseItem[] = await getAllBreweries();

  const transformedData = transformBreweries(inputData);
  return transformedData;
};
