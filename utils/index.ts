//Cars API call
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '3f0f584ea5msh8a830b8e472eaeap1f0093jsn4321184fab9a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}