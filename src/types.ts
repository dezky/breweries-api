type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

type NullableProperty =
  | 'street'
  | 'address_2'
  | 'address_3'
  | 'county_province'
  | 'longitude'
  | 'latitude'
  | 'phone'
  | 'website_url';

type NullableCamelCaseProperty =
  | 'street'
  | 'address2'
  | 'address3'
  | 'countyProvince'
  | 'longitude'
  | 'latitude'
  | 'phone'
  | 'websiteUrl';

type BaseBrewery = {
  id: string;
  name: string;
  street: string | null;
  city: string;
  state: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
};

export type BreweryResponseItem = BaseBrewery & {
  brewery_type: string;
  address_2: string | null;
  address_3: string | null;
  county_province: string | null;
  postal_code: string;
  website_url: string | null;
  updated_at: string;
  created_at: string;
};

export type PartialBreweryResponseItem = MakeOptional<BreweryResponseItem, NullableProperty>;

export type BreweryCamelCase = MakeOptional<
  BaseBrewery & {
    breweryType: string;
    address2?: string | null;
    address3?: string | null;
    countyProvince?: string | null;
    postalCode: string;
    websiteUrl?: string | null;
    updatedAt: string;
    createdAt: string;
  },
  NullableCamelCaseProperty
>;

export const isNullableCamelCaseProperty = (
  property: keyof BreweryCamelCase
): property is NullableCamelCaseProperty =>
  property === 'countyProvince' ||
  property === 'latitude' ||
  property === 'longitude' ||
  property === 'phone' ||
  property === 'street' ||
  property === 'websiteUrl' ||
  property === 'address2' ||
  property === 'address3';
