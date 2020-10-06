import {selectToDateActionConstant} from '../constants/actionConstants' 

const selectToDateAction = (selectedDate) => () => {
    return {type:selectToDateActionConstant, date:selectedDate}
}
export default selectToDateAction