import { useEffect } from 'react';
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { TbClothesRack } from "react-icons/tb";
import { useWeatherStore } from '../../store/store';
import styles from './Air.module.scss';

export default function Air(){
  const weather = useWeatherStore(state => state.items)
  const isLoading = useWeatherStore(state => state.isLoading)
  const fetchWeather = useWeatherStore(state => state.fetchWeather)
  
  useEffect(() => {
    try {
      fetchWeather()
    } catch (error) {
      console.log(error)
    }
  }, [fetchWeather])
  if (isLoading) return <h3>Loading...</h3>
  return(
    <div className={styles.air}>
      <h3 className={styles.air__subtitle}>air conditions</h3>
      <div className={styles.air__temp}>
        {weather.map(w =>(
          <div className={styles.temp__content}>
            <div className={styles.content__left}>
              <div className={styles.left__top}>
                <p className={styles.top__text}><TbClothesRack/>Real Feel</p>
                <p className={styles.top__feel}>{w.feels_like}°</p>
              </div>
              <div className={styles.left__under}>
                <p className={styles.under__text}><CiTempHigh /> Max Temp</p>
                <p className={styles.under__max}>{w.temp_max}°</p>
              </div>
            </div>
            <div className={styles.content__right}>
              <div className={styles.right__top}>
                <p className={styles.top__text}><FaWind /> Wind Speed</p>
                <p className={styles.top__speed}>{w.speed} km/h</p>
              </div>
              <div className={styles.right__under}>
                <p className={styles.under__text}><CiTempHigh />Min Temp</p>
                <p className={styles.under__min}>{w.temp_min}°</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}