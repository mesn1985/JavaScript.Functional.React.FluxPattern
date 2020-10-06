import {dataType,nationalUnitOfMeasures} from '../constants/dataType'
export  function getUnitSymbol(unitOfMeasure,type)
{   
    console.log(type)
    switch(type){
        case dataType.temperature:
            return getTempratureSymbol(unitOfMeasure)
        case dataType.precipitation:
            return getPrecipitationSymbol(unitOfMeasure)
        case dataType.wind:
            return getWindSymbol(unitOfMeasure)
        case dataType.cloud:
            return getCloudSymbol(unitOfMeasure)
        default:
             throw `unrecognized data type -> getUnitSymbol ${type}`
    }

}

function getTempratureSymbol(unitOfMeasure)
{
    console.log(unitOfMeasure)
    if(nationalUnitOfMeasures.us===unitOfMeasure)
        return 'F'
    else
        return 'C'
}
function getPrecipitationSymbol(unitOfMeasure){
    
    if(nationalUnitOfMeasures.us===unitOfMeasure)
        return 'Inches'
    else
        return 'mm'
}
function getWindSymbol(unitOfMeasure){
    
    if(nationalUnitOfMeasures.us===unitOfMeasure)
        return 'MPH'
    else
        return 'm/s'
}
function getCloudSymbol(unitOfMeasure){
    
    return '%'
}

