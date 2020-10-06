import DateInterval from '../models/common/DateInterval'
import {dataType} from '../constants/dataType'
import {dataMessageStrings} from '../constants/Messages' 

const filterForInterval = (state, weatherHistory) => {
    const interval = new DateInterval(state.fromDate, state.toDate)

    const history = weatherHistory.forPeriod(interval).forPlace(state.city)

    const tempHistoryArray = history.forType(dataType.temperature).data()
    const highstTemp = getHighstTemprature(tempHistoryArray)
    const lowstTemp = getLowstTemprature(tempHistoryArray)
    const totalPrecip = getTotalPrecipitation(history.forType(dataType.precipitation))
    const dominantWindDirection = getDominantWindType(history.forType(dataType.wind))
    const avgCloudCov = getAverageCloudCoverage(history.forType(dataType.cloud))

    return {
        highstTemp: highstTemp,
        lowstTemp: lowstTemp,
        totalPrecip: totalPrecip,
        dominantWindDirection: dominantWindDirection,
        avgCloudCov: avgCloudCov
    }
}
function getHighstTemprature(historyArray){
    const highstTemp = Math.max(...historyArray.map(weather => weather.value()))

    if(isNaN(highstTemp)||!isFinite(highstTemp))
        return  dataMessageStrings.noDataFound()
    return highstTemp
}
function getLowstTemprature(historyArray){
    const lowstTemp = Math.min(...historyArray.map(weather => weather.value()))

    if(isNaN(lowstTemp)||!isFinite(lowstTemp))
        return  dataMessageStrings.noDataFound()
    return lowstTemp
}
function getTotalPrecipitation(history){
    const totalPrecip = history
    .data()
    .reduce((acc, weather) => {
        return acc + parseFloat(weather.value())
    }, 0.0)

    return totalPrecip
}
function getDominantWindType(history){
    const windOccourences = history
        .data()
        .map(wind => wind.direction())
        .reduce((prev, next) => {
            prev[next] = (prev[next] + 1) || 1
            return prev
        }, { [ dataMessageStrings.noDataFound()]: 0 })
    const dominantWindDirection = Object
        .keys(windOccourences)
        .reduce((preVkey, nextKey) => windOccourences[preVkey] > windOccourences[nextKey] ? preVkey : nextKey)
    return dominantWindDirection
}
function getAverageCloudCoverage(history){
    const cloudArray = history.data()
    return  cloudArray
            .reduce((acc, value) => { return acc + value.value() }, 0) / cloudArray.length || dataMessageStrings.noDataFound()
}
const filterForLatestMeasureMents = (state, weatherHistory) => {
    const city = state.city
    const interval = new DateInterval(state.fromDate, state.toDate)
    const history = weatherHistory.forPlace(city).forPeriod(interval)
    const temp = getObjectWithHighstDate(history, dataType.temperature)
    const precip = getObjectWithHighstDate(history, dataType.precipitation)
    const wind = getObjectWithHighstDate(history, dataType.wind)
    const cloud = getObjectWithHighstDate(history, dataType.cloud)

    return { temprature: temp, precition: precip, wind: wind, cloud: cloud }
}
const filterFor24HoursPredictions = (state, weatherPrediction) => {
    const city = state.city
    let fromDate = state.toDate
    let collect = []

    for (let i = 0; i < 24; i++) {
        collect.push(create24HourPredictionObject(fromDate, weatherPrediction.forPlace(city)))
        fromDate = incrementDateWithOneHour(fromDate)
    }
    return collect;
}

function create24HourPredictionObject(fromDate, weatherPrediction) {
    const fromTemp = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.temperature).avarageFromValue()
    const toTemp = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.temperature).avarageToValue()
    const fromCloud = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.cloud).avarageFromValue()
    const toCloud = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.cloud).avarageToValue()
    const fromWind = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.wind).avarageFromValue()
    const toWind = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.wind).avarageToValue()
    const fromPrecip = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.precipitation).avarageFromValue()
    const toPrecip = weatherPrediction
        .forPeriod(new DateInterval(fromDate, incrementDateWithOneHour(fromDate)))
        .forType(dataType.precipitation).avarageToValue()
    const hour = getHour(fromDate.getHours())
    return { hour: hour, toTemp: toTemp, fromTemp: fromTemp, toCloud: toCloud, fromCloud: fromCloud, fromWind: fromWind, toWind: toWind, fromPrecip: fromPrecip, toPrecip: toPrecip }
}
function getHour(hour) {
    if (hour.toString().length < 2)
        return '0' + hour
    return hour
}

function incrementDateWithOneHour(date) {
    return new Date(date.getTime() + 60 * 60 * 1000)
}

function getObjectWithHighstDate(weatherHistory, dataType) {
    const history = weatherHistory.forType(dataType).data()

    if (history.length === 0)
        return  dataMessageStrings.noDataFound()

    return weatherHistory
        .forType(dataType)
        .data()
        .reduce((LatestObj, currObj) => LatestObj.time() > currObj.time() ? LatestObj : currObj).value()
}

const filter = 
     {
        filterForInterval:filterForInterval,
        filterForLatestMeasureMents:filterForLatestMeasureMents, 
        filterFor24HoursPredictions:filterFor24HoursPredictions
        }

export default filter