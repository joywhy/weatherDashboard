import Header from '../Header';
import { Today, Hourly, WeatherMap, Highlights } from '@/components/organisms';

function HomePage() {
  return (
    <div className="page">
      <div className="page__container ">
        <Header />

        <main className="grid w-full  h-[calc(100%-60px)]  mt-5 grid-rows-custom grid-cols-4 gap-5 ">
          <Today />
          <Hourly />
          <WeatherMap />
          <Highlights />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
