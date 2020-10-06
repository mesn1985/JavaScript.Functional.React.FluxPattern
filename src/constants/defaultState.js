import {get5DaysEarlier,getToday } from '../helpers/DateHelper'

 const initialState = {
    city:'Horsens',
    fromDate: get5DaysEarlier(),
    toDate: getToday(),
    twentyFourHoursPredicitions: [],
    history: {highstTemp:'No data',lowstTemp:'No data',totalPrecip:'No data',dominantWindDirection:'No data',avgCloudCov:'No Data'},
    latestData: {cloud:'No data', precition:'No data', wind:'No data',temprature:'Nodata'},
    isLoadingData:false,
    hasError:false
}

export default initialState