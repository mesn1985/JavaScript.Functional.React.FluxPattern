import {get5DaysEarlier,getToday } from '../helpers/DateHelper'
import {dataMessageStrings} from '../constants/Messages'

 const initialState = {
    city:'Horsens',
    fromDate: get5DaysEarlier(),
    toDate: getToday(),
    twentyFourHoursPredicitions: [],
    history: {highstTemp:[noDataTextString()],lowstTemp:[noDataTextString()],totalPrecip:[noDataTextString()],dominantWindDirection:[noDataTextString()],avgCloudCov:'No Data'},
    latestData: {cloud:[noDataTextString()], precition:[noDataTextString()], wind:[noDataTextString()],temprature:[noDataTextString()]},
    isLoadingData:false,
    hasError:false
}

function noDataTextString(){
    return dataMessageStrings.noDataFound()
}

export default initialState