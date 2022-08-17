## Adding new step

If you need to add a new step to the pipeline then you have to follow these steps:

1. Create the transform method in `src\etlPipeline\transformStep\steps`.
2. Integrate the new method in `src\etlPipeline\transformStep\transformStep.ts`.

### Caveats

The position where you integrate the new transform method is important because the input of this method is the output of the previous method, and the output of this method will be the input of the following method, so probably you will need to update or create new types to support this.

### Example

We want to transform the brewery name to upper case.

Create a file called `convertNameToUpperCase.ts` in `src\etlPipeline\transformStep\steps` with the following content

```ts
export const convertNameToUpperCase = (breweries: PartialBreweryResponseItem[]) =>
  breweries.map((brewery) => ({
    ...brewery,
    name: brewery.name.toUpperCase(),
  }));
```

And the integration in `src\etlPipeline\transformStep\transformStep.ts` would be

```ts
export const transformBreweries = (breweries: BreweryResponseItem[]) => {
  const breweriesWithoutNullProperties = removeNullProperties(breweries);

  const breweriesWithCamelCaseProperties = convertPropertiesToCamelCase(
    breweriesWithoutNullProperties
  );

  // add new method here
  const breweriesWithUpperCaseName = convertNameToUpperCase(breweriesWithCamelCaseProperties);

  const breweriesWithRegion = addRegion(breweriesWithUpperCaseName);

  const breweriesGroupedByState = groupByState(breweriesWithRegion);

  return breweriesGroupedByState;
};
```
