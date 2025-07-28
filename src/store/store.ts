import { create } from 'zustand';
import type { IWeather, IWeatherState } from '../app/@types/types';

export const useWeatherStore = create<IWeatherState>()((set) =>({
  items: [],
  isLoading: false,
  fetchWeather: async () =>{
    const res = await fetch('http://localhost:3000/weather')
    const data = await res.json() as IWeather[]
    set({items: data})
  }
}))