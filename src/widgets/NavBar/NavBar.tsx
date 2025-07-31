import { useState } from 'react';
import { CiBoxList, CiMap, CiSettings } from "react-icons/ci";
import { TiWeatherCloudy, TiWeatherWindyCloudy } from "react-icons/ti";
import styles from './NavBar.module.scss';

export default function NavBar(){
  const [isActive, setIsActive] = useState(0)
  return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__list}>
				<TiWeatherWindyCloudy className={styles.navbar__logo} />
				<TiWeatherCloudy
					onClick={() => setIsActive(0)}
					className={
						isActive === 0 ? styles.list__item_active : styles.list__item
					}
				/>
				<CiBoxList
					onClick={() => setIsActive(1)}
					className={
						isActive === 1 ? styles.list__item_active : styles.list__item
					}
				/>
				<CiMap
					onClick={() => setIsActive(2)}
					className={
						isActive === 2 ? styles.list__item_active : styles.list__item
					}
				/>
			</ul>
			<CiSettings
				onClick={() => setIsActive(3)}
				className={
					isActive === 3 ? styles.navbar__item_active : styles.navbar__item
				}
			/>
		</nav>
	)
}