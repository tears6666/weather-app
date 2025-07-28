export interface IWeather {
	name: string
	temp: number
	description: string
}
export interface IWeatherState {
	items: IWeather[]
	isLoading: boolean
	fetchWeather: () => void
}
