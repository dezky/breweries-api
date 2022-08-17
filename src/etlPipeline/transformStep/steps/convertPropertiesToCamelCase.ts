import {
  BreweryCamelCase,
  isNullableCamelCaseProperty,
  PartialBreweryResponseItem,
} from '../../../types';

const emptyBreweryCamelCase: BreweryCamelCase = {
  id: '',
  name: '',
  breweryType: '',
  city: '',
  state: '',
  country: '',
  postalCode: '',
  updatedAt: '',
  createdAt: '',
};

const capitalizeFirst = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const toCamelCase = (text: string) =>
  text
    .split('_')
    .map((part, index) => (index === 0 ? part : capitalizeFirst(part)))
    .join('');

const breweryToCamelCase = (brewery: PartialBreweryResponseItem) => {
  const newBrewery: BreweryCamelCase = { ...emptyBreweryCamelCase };
  Object.entries(brewery).forEach(([property, value]) => {
    const propertyCamelCase = toCamelCase(property) as keyof BreweryCamelCase;
    if (isNullableCamelCaseProperty(propertyCamelCase)) {
      newBrewery[propertyCamelCase] = value;
    } else if (value !== null) {
      newBrewery[propertyCamelCase] = value;
    }
  });

  return newBrewery;
};

export const convertPropertiesToCamelCase = (breweries: PartialBreweryResponseItem[]) =>
  breweries.map(breweryToCamelCase);
