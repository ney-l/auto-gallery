import axios, { AxiosError } from 'axios';
import { fetchCarImages } from './fetchCarImages';
import { Car } from '@/components/catalog/CarCard';
import { SearchParams } from '@/app/page';

type CarFromAPIResponse = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

const getFormattedParams = (params: SearchParams) =>
  Object.entries(params)
    .filter(([_, value]) => value !== '')
    .map(([key, value]) => {
      if (key === 'autoMaker') {
        return ['make', value];
      }
      if (key === 'fuelType') {
        return ['fuel_type', value];
      }
      return [key, value];
    })
    .reduce((acc, [key, value]) => {
      return `${acc}&${key}=${value}`;
    }, '');

function getCarAPIRequestConfig(params: SearchParams) {
  const apiKey = process.env.CARS_API_KEY;
  const apiUrl = process.env.CARS_API_ENDPOINT;

  if (!apiKey || !apiUrl) {
    throw new Error('Missing API key or endpoint');
  }
  const url = `${apiUrl}/cars?${getFormattedParams(params)}`;

  const headers = {
    'X-Api-Key': apiKey,
  };
  return { url, headers };
}

export async function fetchCarsFromAPI(params: SearchParams) {
  const { url, headers } = getCarAPIRequestConfig(params);
  try {
    const response = await axios.get(url, { headers });

    const { data } = response;

    return {
      message: '',
      data,
      isError: false,
    };
  } catch (error: AxiosError | any) {
    console.error(error.response.statusText, error.response.data);
    return {
      message: error.response.statusText,
      data: null,
      isError: true,
    };
  }
}

const fetchCars = async (params: SearchParams) => {
  const { message, data, isError } = await fetchCarsFromAPI(params);
  if (isError) {
    return { message, data: [] };
  }
  const formattedCars = formatApiResponse(data);
  const carsWithImages = addImages(formattedCars);

  return {
    message: '',
    data: carsWithImages,
  };
};

export type CarWithoutImages = Omit<Car, 'images'>;

const FRONT_ANGLE = '29';
const TOP_ANGLE = '33';
const BACK_ANGLE = '13';

const addImages = (cars: CarWithoutImages[]) =>
  cars.map((car) => ({
    ...car,
    images: {
      main: fetchCarImages(car),
      front: fetchCarImages(car, FRONT_ANGLE),
      top: fetchCarImages(car, TOP_ANGLE),
      back: fetchCarImages(car, BACK_ANGLE),
    },
  }));

const formatApiResponse = (cars: CarFromAPIResponse[]) =>
  cars.map((car) => ({
    cityMpg: car.city_mpg,
    carClass: car.class,
    combinationMpg: car.combination_mpg,
    cylinders: car.cylinders,
    displacement: car.displacement,
    drive: car.drive,
    fuelType: car.fuel_type,
    highwayMpg: car.highway_mpg,
    make: car.make,
    model: car.model,
    transmission: car.transmission,
    year: car.year,
  }));

export { fetchCars };
