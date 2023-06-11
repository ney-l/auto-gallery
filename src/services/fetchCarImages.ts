import { CarWithoutImages } from './fetchCarService';

export const fetchCarImages = (car: CarWithoutImages, angle?: string) => {
  const apiKey = process.env.CAR_IMAGES_API_KEY;
  const apiUrl = process.env.CAR_IMAGES_ENDPOINT;
  if (!apiKey || !apiUrl) {
    throw new Error('Missing API key or endpoint');
  }

  const { make, year, model } = car;
  const url = new URL(apiUrl);
  url.searchParams.append('customer', apiKey);
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', year.toString());
  url.searchParams.append('angle', angle?.toString() ?? '');

  return url.toString();
};
