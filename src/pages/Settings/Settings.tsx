import { Switch } from '@/components/ui/switch'
import styles from './Settings.module.scss'
export default function Settings() {
	return (
		<div className={styles.settings}>
			<h1 className={styles.settings__title}>Settings</h1>
			<div className={styles.settings__theme}>
				<div className={styles.theme__content}>
					<p className={styles.content__change}>Change color theme</p>
					<p className={styles.content__text}>
						Change color theme(black or white)
					</p>
				</div>
				<div className={styles.theme__inront}>
					<Switch />
				</div>
			</div>
		</div>
	)
}
