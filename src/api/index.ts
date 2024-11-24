import axios from 'axios';
import { ForecastDay } from '../types';
//`${process.env.BASE_URL}/forecast.json?q=${cityName}&days=7&key=${process.env.API_KEY}`
const URL = {
  forecast: `${process.env.BASE_URL}/forecast.json?days=7&key=${process.env.API_KEY}`,
  marine: `${process.env.BASE_URL}/marine.json?days=1&key=${process.env.API_KEY}`,
};

// 도시별 날씨조회
export const fetchApi = async (cityName: string, resolve) => {
  try {
    const res = await axios.get(`${URL.forecast}&q=${cityName}`);

    if (res.status === 200) {
      resolve(res.data);
    }
  } catch (error) {
    console.error(error);
  }
};

// 도시별 조류 조회
export const fetchTideApi = async (cityName: string, resolve) => {
  try {
    const res = await axios.get(`${URL.marine}&q=${cityName}`);

    if (res.status === 200 && res.data) {
      resolve(res.data.forecast.forecastday[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

//도시별 한주 날씨 조회
export const getOneWeekWeather = async (cityName: string, resolve) => {
  try {
    const res = await axios.get(`${URL.forecast}&q=${cityName}`);
    console.log(res);

    if (res.status === 200 && res.data) {
      const newData = res.data.forecast.forecastday.map((item: ForecastDay) => {
        return {
          maxTemp: Math.round(item.day.maxtemp_c),
          minTemp: Math.round(item.day.mintemp_c),
          date: item.date_epoch,
          iconCode: item.day.condition.code,
          isDay: item.day.condition.icon.includes('day'),
        };
      });
      resolve(newData);
    }
  } catch (error) {
    console.log(error);
  }
};
