import { Outlet } from 'react-router-dom'
import NavBar from '../../widgets/NavBar/NavBar'
import styles from './Layout.module.scss'

export const Layout = () =>{
  return(
    <div className={styles.layout}>
      <NavBar />
      <Outlet />
    </div>
  )
}