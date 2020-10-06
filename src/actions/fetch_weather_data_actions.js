import {weatherFetchErrorConstant,weatherFetchSuccedConstant,weatherFetchLoadingConstant} from '../constants/actionConstants'

export const weatherFetchHasError = (bool)=>{
    return{
            type:weatherFetchErrorConstant, hasError:bool,isLoadingData:false
            }
}
export const weatherFetchLoading = (bool)=>{
    return{
            type:weatherFetchLoadingConstant,isLoadingData:bool
    }
}
export const weatherFetchSucced = (predictions,latest,filteredInterval)=>{
    return{
            type:weatherFetchSuccedConstant,twentyFourHoursPredicitions:predictions,latest:latest,history:filteredInterval
    }
}