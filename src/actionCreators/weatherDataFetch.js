import * as fetchActions from '../actions/fetch_weather_data_actions'
import weatherPrediction from '../models/fetch/WeatherForecastService'
import weatherHistory from '../models/fetch/WeatherHistoryService'
import filter from '../helpers/WeatherDataFilterHelper'

export default function getWeatherData(action){
    return (dispatch,getState) => {
                dispatch(action())
                dispatch(fetchActions.weatherFetchLoading(true))
               
            weatherPrediction().then(
                    prediction =>{
                        weatherHistory().then(
                          history => {
                            const stateSnapShot = getState()
                            const filteredPredcitions =filter.filterFor24HoursPredictions(stateSnapShot,prediction)
                            const filteredLatest = filter.filterForLatestMeasureMents(stateSnapShot,history)
                            const filteredInterval = filter.filterForInterval(stateSnapShot,history)
                            dispatch(fetchActions.weatherFetchSucced(filteredPredcitions,filteredLatest,filteredInterval))
                            
                          }
                        )
                    }
                ).catch((e)=>{
                        alert('Error Occoured, could not retrieve data from the server')
                        dispatch(fetchActions.weatherFetchHasError(true))
                })
            }
            }
