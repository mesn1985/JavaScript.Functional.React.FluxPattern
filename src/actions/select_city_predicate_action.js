import {selectCityActionConstant} from '../constants/actionConstants' 

const selectCityAction = (selectedCity) => () => {
    return {type:selectCityActionConstant, city:selectedCity}
}
export default selectCityAction