import { Route, Routes } from 'react-router-dom'
import { Layout } from '../pages/Layout/Layout'
import Weather from '../pages/Weather/Weather'
export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Weather />} />
				</Route>
			</Routes>
		</>
	)
}
