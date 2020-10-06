import {selectFromDateActionConstant} from '../constants/actionConstants' 

const selectFromDateAction = (selectedDate) => () => {
    return {type:selectFromDateActionConstant, date:selectedDate}
}
export default selectFromDateAction