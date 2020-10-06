import React from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-date-picker'
import toDateAction from '../actions/select_to_date_action'
import fetchAction from '../actionCreators/weatherDataFetch'
import 'bootstrap/dist/css/bootstrap.css'

function date_picker_To_component({toDate,toDateAction,fromDate,fetchAction}){
    return(
        <div id = 'datePickeroComponent' className='container'>
           <div className="row">
           <div className="col-sm">
           <h1>To:</h1>
            </div>
               <div className="col-sm">
               <DatePicker 
                value={toDate}
                onChange={handleChange(toDateAction,fetchAction,fromDate)}
                className="mt-3 col-md-12 col-offset-4"
                />
           </div>
           <hr/>
        </div>
      </div>

)
    
}
const handleChange=(action,fetchAction,fromDate)=>(toDate)=>{
    if(dateIsBefore(fromDate,toDate))
    alert('to date must be after from date')
    else
    fetchAction(action(toDate))
}
const dateIsBefore = (fromDate,toDate) => {
    return (fromDate>=toDate)?true:false
}
const mapDispatchToProps = (dispatch) => {
    return {
    toDateAction: date => toDateAction(date),
    fetchAction: (toDateAction) => dispatch(fetchAction(toDateAction)) 
    }
}
const mapStateToProp = (state) => {
    return {toDate: state.toDate, fromDate: state.fromDate}
}

const selectFromDate = connect(mapStateToProp,mapDispatchToProps)(React.memo(date_picker_To_component))

export default selectFromDate