export interface IWeather {
	main: string
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	speed: number
	id: number
	name: string
	description: string
}
export interface IWeatherState {
	items: IWeather[]
	isLoading: boolean
	fetchWeather: () => void
}
