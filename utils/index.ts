import { CarProps, FilterProps } from "@/types";

//Cars API call
export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    const apiBase = process.env.CARS_RAPID_API_BASE || 'https://cars-by-api-ninjas.p.rapidapi.com';

    console.log("[Secret] Checking secrets from .env. SECRET_LOADING_TEST:",process.env.SECRET_LOADING_TEST || 'Notloaded');

    // Set the required headers for the API request
    const headers = {
        'X-RapidAPI-Key': process.env.CARS_RAPID_API_KEY || '',
        'X-RapidAPI-Host': process.env.CARS_RAPID_API_HOST || ''
    }

    const response = await fetch(`${apiBase}/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        });
    // Parse the response as JSON
    const result = await response.json();

    return result;
}

//Calculate car rent based on city_mpg and year
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

//Generate car image url
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
    const carsImageApiCustomer = process.env.NEXT_PUBLIC_CARS_IMAGE_API_CUSTOMER || '';

    url.searchParams.append('customer', carsImageApiCustomer);
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    console.log("Reached generateCarImageUrl:",url);
    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};