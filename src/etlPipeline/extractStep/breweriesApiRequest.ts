import https from 'https';
import { BreweryResponseItem } from '../../types';

export const getPageOfBreweries = (page: number): Promise<BreweryResponseItem[]> =>
  new Promise((resolve, reject) => {
    https
      .get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=50`, (res) => {
        const data: Uint8Array[] = [];

        res.on('data', (chunk) => {
          data.push(chunk);
        });

        res.on('end', () => {
          const result: BreweryResponseItem[] = JSON.parse(Buffer.concat(data).toString());
          resolve(result);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
