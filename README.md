# Breweries API

## Overview

The Breweries API is a backend API that allows you to get a list of breweries.

## Setup

```sh
git clone https://github.com/dezky/breweries-api.git
cd breweries-api
npm install (for installing dependencies)
```

## Running

- For running the `server`, in the root folder of the project execute:

```sh
npm start
```

## Environment Variables

This section is to describe the env vars you can set when using the API:

- `PORT`: [OPTIONAL] port where the API will run. The default value is `4000`.
- `PAGE_LIMIT`: [OPTIONAL] amount of pages that are recoveried from `https://api.openbrewerydb.org/breweries`. The default value is `2`.
- `VALID_TOKEN`: [OPTIONAL] token used to autenticate the request. The default value is `my-valid-token`.

## Scripts

- `npm start`: it starts the server.
- `npm run test`: it runs all test files.
- `npm run type-check`: it verifies if there are any type error.
- `npm run lint`: it verifies if there are any code style error.
- `npm run lint-fix`: it verifies and fixes any code style error.

## Endpoints

- `/breweries`: it's the endpoint to get the list of breweries.

## Example

To test the endpoint you can do the following:

```sh
curl --header 'Authorization: Bearer my-valid-token' --location --request GET 'localhost:4000/breweries'
```

## Decisions

- [Steps order change](https://github.com/dezky/breweries-api/tree/main/docs/decisions/steps-order.md)
- [Sort before group](https://github.com/dezky/breweries-api/tree/main/docs/decisions/sort-before-group.md)

## Add a new step to pipeline

You can find [here](https://github.com/dezky/breweries-api/tree/main/docs/technical/add-new-step.md) information of how to add new steps to the pipeline.

## TODO

You can find [here](https://github.com/dezky/breweries-api/tree/main/docs/todo) the improvements that I would apply.
