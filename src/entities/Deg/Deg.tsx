import { useEffect } from 'react'
import { IoSunny } from 'react-icons/io5'
import { useWeatherStore } from '../../store/store'
import styles from './Deg.module.scss'

export default function Deg() {
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

	return (
		<div className={styles.deg}>
			{weather.map(w => (
				<div className={styles.deg__card}>
					<div className={styles.card__content}>
						<div className={styles.content__top}>
							<h2 className={styles.top__subtitle}>{w.name}</h2>
							<p className={styles.top__text}>{w.description}</p>
						</div>
						<p className={styles.content__under}>{w.temp}°</p>
					</div>
					<IoSunny className={styles.card__icon} />
				</div>
			))}
		</div>
	)
}
