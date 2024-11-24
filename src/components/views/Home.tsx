import { useEffect } from 'react';
import Header from '../common/Header';
import {
  Today,
  Hourly,
  WeatherMap,
  Highlights,
  Weekly,
} from '@/components/home';

function HomePage() {
  async function runPromiseAll() {
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) =>
      setTimeout(resolve, 100, 'quick')
    );
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

    const data = await Promise.any([promise1, promise2, promise3]);
    console.log(data);
  }

  useEffect(() => {
    runPromiseAll();
  }, []);
  return (
    <div className="page">
      <div className="page__container ">
        <Header />

        <main className="grid w-full  h-[calc(100%-60px)]  mt-5 grid-rows-custom grid-cols-4 gap-5 ">
          <Today />
          <Hourly />
          <WeatherMap />
          <Highlights />
          <Weekly />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
