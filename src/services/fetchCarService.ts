import axios, { AxiosError } from 'axios';

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

export async function fetchCars(model: string) {
  const apiKey = process.env.CARS_API_KEY;
  const apiUrl = process.env.CARS_API_ENDPOINT;

  if (!apiKey || !apiUrl) {
    throw new Error('Missing API key or endpoint');
  }
  const url = `${apiUrl}/cars?model=${model}`;
  const headers = {
    'X-Api-Key': apiKey,
  };
  try {
    const response = await axios.get(url, { headers });

    const { data } = response;
    const formattedCars = formatApiResponse(data);
    return {
      message: '',
      data: formattedCars,
    };
  } catch (error: AxiosError | any) {
    console.error(error.response.statusText, error.response.data);
    return {
      message: error.response.statusText,
      data: null,
    };
  }
}

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
