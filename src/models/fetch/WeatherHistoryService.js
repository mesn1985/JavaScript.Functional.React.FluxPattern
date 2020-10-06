const WeatherHistory = require('../common/WeatherHistory')
const fetch = require('node-fetch')
const Temperature = require('../common/Temprature')
const Wind = require('../common/Wind')
const Precipitation = require('../common/Precipitation')
const CloudCovarage = require('../common/CloudCoverage')

const root = 'http://localhost:8080/'

//Entry point function
function getWeatherHistory () {
  return fetchAllWeatherData()
    .then(result => new WeatherHistory(result))
}

async function fetchAllWeatherData () {
  const response = await fetch(root + 'data')
  const body = await response.json()
  return mapConententToDomainModel(body)
}
export async function addWeatherHistoryData(data){
  const arr = []
  arr.push(data)
  try{
  const request = await fetch(root+'data', {
    method: 'POST', 
    body: JSON.stringify(arr),
    headers: {
      'Content-Type': 'application/json'
    }})
    const response = await request
    if(response.status>=300||response.status<200){
       return false
    }
    return true
  }catch(e){
    console.log('post failed:',e)
    return false
  }
}

function mapConententToDomainModel (ArrayOfObjects) {
  return ArrayOfObjects.map(obj => mapObjectToDomainModel(obj))
}

function mapObjectToDomainModel (obj) {
  if (isTemperatureObject(obj)) {
    return new Temperature(obj.time, obj.place, obj.type, obj.unit, obj.value)
  }
  if (isPrecipitationObject(obj)) {
    return new Precipitation(obj.time, obj.place, obj.type, obj.unit, obj.value)
  }
  if (isWindObject(obj)) {
    return new Wind(obj.time, obj.place, obj.type, obj.unit, obj.value, obj.direction)
  }
  if (isCloudCoverageObject(obj)) {
    return new CloudCovarage(obj.time, obj.place, obj.type, obj.unit, obj.value)
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

export default getWeatherHistory

// Example
// getWeatherHistory().then(i => console.log(i.forPlace("Horsens").forType("temperature").convertToUSUnits().lowestValue()))
// getWeatherHistory().then(i => console.log(i.forPlace("Aarhus").forType("precipitation").convertToUSUnits().data()[0]))
