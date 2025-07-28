import { useEffect } from 'react'
import { useWeatherStore } from '../../store/store'
import styles from './Deg.module.scss'

export default function Deg() { 
  const items = useWeatherStore(state => state.items)
  const fetchDeg = useWeatherStore(state => state.fetchWeather)
  useEffect(() => {
    try {
      fetchDeg()
    } catch (error) {
      console.log(error)
    }
  }, [fetchDeg])
  return(
    <div className={styles.deg}>
      {items.map(item => (
        <div className={styles.deg__card}>
          <div className={styles.card__top}>
            <h1 className={styles.top__title}>{item.name}</h1>
            <p className={styles.top__text}>{item.description}</p>
          </div>
          <h2 className={styles.card__subtitle}>{item.temp}</h2>
        </div>
      ))}
    </div>
  )
}