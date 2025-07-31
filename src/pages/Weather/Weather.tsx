import Air from '../../entities/Air/Air'
import Deg from '../../entities/Deg/Deg'
import styles from './Weather.module.scss'

export default function Weather() {
	return (
		<div className={styles.weather}>
			<Deg />
			<Air />
		</div>
	)
}
