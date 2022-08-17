## Transform improvements

I would change the way I'm applying the transform methods in the cases where I don't need to change the structure of the data. For example, for the step removeNullProperties, convertPropertiesToCamelCase, and addRegion, I would iterate breweries array only one time and apply the transformation inside the iteration:

```ts
export const transformBreweries = (breweries: BreweryResponseItem[]) => {
  const transformedBreweries = breweries.map((brewery) => {
    const breweryWithoutNullProperties = removeNullProperties(brewery);
    const breweryWithCamelCaseProperties = convertPropertiesToCamelCase(
      breweryWithoutNullProperties
    );

    return addRegion(breweryWithCamelCaseProperties);
  });

  const breweriesGroupedByState = groupByState(transformedBreweries);

  return breweriesGroupedByState;
};
```

In this case, I would need to adapt the transform methods to receive only one brewery.
