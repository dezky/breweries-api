import { getPageOfBreweries } from './breweriesApiRequest';

const PAGE_LIMIT = process.env.PAGE_LIMIT || 2;

export const getAllBreweries = async () => {
  const breweries = [];
  let currentPage = 0;
  let hasMore = true;
  while (hasMore && currentPage < PAGE_LIMIT) {
    const newGroupOfBreweries = await getPageOfBreweries(currentPage);
    if (newGroupOfBreweries.length > 0) {
      breweries.push(...newGroupOfBreweries);
      currentPage++;
    } else {
      hasMore = false;
    }
  }

  return breweries;
};
