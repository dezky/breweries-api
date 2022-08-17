import { convertPropertiesToCamelCase } from '..';
import { BreweryCamelCase, BreweryResponseItem } from '../../../../types';

const breweriesInput: BreweryResponseItem[] = [
  {
    id: 'banjo-brewing-fayetteville',
    name: 'Banjo Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Fayetteville',
    state: 'West Virginia',
    county_province: null,
    postal_code: '25840',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '3042164231',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'barrel-brothers-brewing-company-windsor',
    name: 'Barrel Brothers Brewing Company',
    brewery_type: 'micro',
    street: '399 Business Park Ct Ste 506',
    address_2: null,
    address_3: null,
    city: 'Windsor',
    state: 'California',
    county_province: null,
    postal_code: '95492-6652',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '7076969487',
    website_url: 'http://www.barrelbrothersbrewing.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
];

const breweriesOutput: BreweryCamelCase[] = [
  {
    id: 'banjo-brewing-fayetteville',
    name: 'Banjo Brewing',
    breweryType: 'planning',
    street: null,
    address2: null,
    address3: null,
    city: 'Fayetteville',
    state: 'West Virginia',
    countyProvince: null,
    postalCode: '25840',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '3042164231',
    websiteUrl: null,
    updatedAt: '2021-10-23T02:24:55.243Z',
    createdAt: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'barrel-brothers-brewing-company-windsor',
    name: 'Barrel Brothers Brewing Company',
    breweryType: 'micro',
    street: '399 Business Park Ct Ste 506',
    address2: null,
    address3: null,
    city: 'Windsor',
    state: 'California',
    countyProvince: null,
    postalCode: '95492-6652',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '7076969487',
    websiteUrl: 'http://www.barrelbrothersbrewing.com',
    updatedAt: '2021-10-23T02:24:55.243Z',
    createdAt: '2021-10-23T02:24:55.243Z',
  },
];

test('convertPropertiesToCamelCase', () => {
  const result = convertPropertiesToCamelCase(breweriesInput);

  expect(result).toEqual(breweriesOutput);
});
