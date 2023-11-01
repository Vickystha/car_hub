import Image from 'next/image'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CustomFilter from './components/CustomFilter'
import { fetchCars } from '@/utils'
import CarCard from './components/CarCard'

export default async function Home() {
  const allCars = await fetchCars();

  //Check if all of the cars data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
       
        {!isDataEmpty ? (
           
          <section>
            <div className='home__cars-wrapper'>
            {/* If not empty data show cars card that return car property (car property by passing car data to it) */}
            {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
             
            </div>
              
          </section>
        ) : (
          //If empty data show error message
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p></p>
          </div>
        )}


      </div>
    </main>
  )
}
