import { Route, Routes } from 'react-router-dom'
import { Layout } from '../pages/Layout/Layout'
import Settings from '../pages/Settings/Settings'
import Weather from '../pages/Weather/Weather'
export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Weather />} />
					<Route path='/settings' element={<Settings />} />
				</Route>
			</Routes>
		</>
	)
}
