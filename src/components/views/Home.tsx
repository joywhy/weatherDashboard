import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { cityNameAtom } from '@/stores';

import Header from '../common/Header';
import {
  Today,
  Hourly,
  WeatherMap,
  Highlights,
  Weekly,
} from '@/components/home';
import { Weather, ForecastTideDay, ForecastDay } from '@/types';
import defaultTideData from '@/assets/data/default_tide.json';
import defaultWeatherData from '@/assets/data/default_weather.json';

import { fetchApi, fetchTideApi, getOneWeekWeather } from '@/api';
function HomePage() {
  const [cityName, setCityName] = useAtom(cityNameAtom);

  const [weatherData, setWeatherData] = useState<Weather>(defaultWeatherData);
  const [tideData, setTideData] = useState<ForecastTideDay>(defaultTideData);
  const [oneWeekWeatherSummary, setOneWeekWeatherSummary] = useState([]);

  // const fetchApi = async () => {
  //   const API_KEY = '56442fada1144d12abf64743241411';
  //   const BASE_URL = 'https://api.weatherapi.com/v1';

  //   try {
  //     /** Promise 인스턴스 방법을 사용했을 땐, resolve에 해당 */
  //     const res = await axios.get(
  //       `${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`
  //     );

  //     if (res.status === 200) {
  //       setWeatherData(res.data);
  //     }
  //   } catch (error) {
  //     /** Promise 인스턴스 방법을 사용했을 땐, reject에 해당 */
  //     console.error(error);
  //   } finally {
  //     /** 비동기 로직이 실행되던 / 되지 않던 무조건 실행되어야만 하는 로직이 작성된다. */
  //     console.log('fetchApi 호출은 되었습니다.');
  //   }
  // };
  // const fetchTideApi = async () => {
  //   const API_KEY = '56442fada1144d12abf64743241411';
  //   const BASE_URL = 'https://api.weatherapi.com/v1';

  //   try {
  //     const res = await axios.get(
  //       `${BASE_URL}/marine.json?q=${cityName}&days=1&key=${API_KEY}`
  //     );

  //     if (res.status === 200 && res.data) {
  //       setTideData(res.data.forecast.forecastday[0]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getOneWeekWeather = async () => {
  //   const API_KEY = '56442fada1144d12abf64743241411';
  //   const BASE_URL = 'https://api.weatherapi.com/v1';

  //   try {
  //     const res = await axios.get(
  //       `${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`
  //     );
  //     console.log(res);

  //     if (res.status === 200 && res.data) {
  //       const newData = res.data.forecast.forecastday.map(
  //         (item: ForecastDay) => {
  //           return {
  //             maxTemp: Math.round(item.day.maxtemp_c),
  //             minTemp: Math.round(item.day.mintemp_c),
  //             date: item.date_epoch,
  //             iconCode: item.day.condition.code,
  //             isDay: item.day.condition.icon.includes('day'),
  //           };
  //         }
  //       );
  //       setOneWeekWeatherSummary(newData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchApi(cityName, (data) => setWeatherData(data));
    fetchTideApi(cityName, (data) => setTideData(data));
    getOneWeekWeather(cityName, (data) => setOneWeekWeatherSummary(data));
  }, [cityName]);

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
