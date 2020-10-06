import cities from '../constants/cities'
import {dataType,nationalUnitOfMeasures} from '../constants/dataType'

export const historyTypeOptions =  [
    {value: dataType.temperature, label: 'temperature'},
    {value: dataType.precipitation, label: 'precipitation'},
    {value: dataType.wind, label: 'wind speed'},
    {value: dataType.cloud, label: 'cloud coverage'}
]
export const cityOptions =  [
    {value: cities.Copenhagen, label: [cities.Copenhagen]},
    {value: cities.Horsens, label: [cities.Horsens]},
    {value: cities.Aarhus, label: [cities.Aarhus]},
]
export const unit = [
    {value:nationalUnitOfMeasures.SI,label:'SI'},
    {value:nationalUnitOfMeasures.us,label:'US'}
]