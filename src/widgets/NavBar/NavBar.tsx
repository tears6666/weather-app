import { useState } from 'react';
import { CiMap, CiSettings } from 'react-icons/ci'
import { TiWeatherCloudy, TiWeatherWindyCloudy } from "react-icons/ti";
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss';

export default function NavBar(){
  const [isActive, setIsActive] = useState(0)
  return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__list}>
				<TiWeatherWindyCloudy className={styles.navbar__logo} />
				<Link to='/'>
					<TiWeatherCloudy
						onClick={() => setIsActive(0)}
						className={
							isActive === 0 ? styles.list__item_active : styles.list__item
						}
					/>
				</Link>
				<CiMap
					onClick={() => setIsActive(1)}
					className={
						isActive === 1 ? styles.list__item_active : styles.list__item
					}
				/>
			</ul>
			<Link to='/settings'>
				<CiSettings
					onClick={() => setIsActive(2)}
					className={
						isActive === 2 ? styles.navbar__item_active : styles.navbar__item
					}
				/>
			</Link>
		</nav>
	)
}