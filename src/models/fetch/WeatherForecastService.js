const WeatherForecast = require('../common/WeatherForeCast')
const fetch = require('node-fetch')
const TempraturePrediction = require('../common/TempraturePrediction')
const WindPrediction = require('../common/WindPrediction')
const PrecipitationPrediction = require('../common/PrecipitationPrediction')
const CloudCovaragePrediction = require('../common/CloudCoveragePrediction')

const root = 'http://localhost:8080/'

//Entry point function
function getWeatherForecast () {
  return fetchAllWeatherForecastData()
    .then(result => new WeatherForecast(result))
}

async function fetchAllWeatherForecastData () {
  const response = await fetch(root + 'forecast')
  const body = await response.json()
  return mapConententToDomainModel(body)
}

function mapConententToDomainModel (ArrayOfObjects) {
  return ArrayOfObjects.map(obj => mapObjectToDomainModel(obj))
}

function mapObjectToDomainModel (obj) {
  if (isTemperatureObject(obj)) {
    return new TempraturePrediction(obj.time, obj.place, obj.type, obj.unit, obj.from, obj.to)
  }
  if (isPrecipitationObject(obj)) {
    return new PrecipitationPrediction(obj.time, obj.place, obj.type, obj.unit, obj.from, obj.to, obj.precipitation_types)
  }
  if (isWindObject(obj)) {
    return new WindPrediction(obj.time, obj.place, obj.type, obj.unit, obj.from, obj.to, obj.directions)
  }
  if (isCloudCoverageObject(obj)) {
    return new CloudCovaragePrediction(obj.time, obj.place, obj.type, obj.unit, obj.from, obj.to)
  }
}

function isPrecipitationObject (obj) {
  return obj.type === 'precipitation'
}

function isWindObject (obj) {
  return obj.type === 'wind speed'
}

function isCloudCoverageObject (obj) {
  return obj.type === 'cloud coverage'
}

function isTemperatureObject (obj) {
  return obj.type === 'temperature'
}

// Example
// getWeatherForecast().then(i => console.log(i.forPlace("Horsens").forType("temperature").convertToUSUnits()))
// getWeatherForecast().then(i => console.log(i.forPlace("Horsens").forType("temperature").convertToUSUnits().avarageFromValue()))
// getWeatherForecast().then(i => console.log(i.forPlace("Horsens").forType("temperature").convertToUSUnits().avarageToValue()))
// getWeatherForecast().then(i => console.log(i.forPlace("Horsens").forType("cloud coverage").convertToUSUnits().data()))

export default getWeatherForecast
