import * as actionConstants from '../constants/actionConstants'
import defaultState from '../constants/defaultState'


export default (state = defaultState, action) =>{
    switch(action.type){
            case actionConstants.selectCityActionConstant:
                return {...state,city:action.city}
            case actionConstants.selectFromDateActionConstant:
                return {...state,fromDate:action.date}
            case actionConstants.selectToDateActionConstant:
                return {...state,toDate:action.date}
            case actionConstants.weatherFetchErrorConstant:
                return {...state, hasError:action.hasError, isLoadingData:action.isLoadingData}
            case actionConstants.weatherFetchSuccedConstant:
                    return {...state,
                        twentyFourHoursPredicitions:action.twentyFourHoursPredicitions,
                        isLoadingData:false, 
                        latestData:action.latest,
                        history:action.history
                    }
            case actionConstants.weatherFetchLoadingConstant:
                    return {...state,isLoadingData:action.isLoadingData}
            default:
                return state
    }
}