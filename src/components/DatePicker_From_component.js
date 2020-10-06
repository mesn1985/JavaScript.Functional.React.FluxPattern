import React from 'react'
import { connect } from 'react-redux'
import fromDateAction from '../actions/select_from_date_action'
import DatePicker from 'react-date-picker'
import fetchAction from '../actionCreators/weatherDataFetch'
import 'bootstrap/dist/css/bootstrap.css'

function date_picker_From_component({fromDateAction,fromDate,toDate,fetchAction}){
    return(
        <div id = 'datePickeroComponent' className='container'>
           <div className="row">
           <div className="col-sm">
           <h1>From:</h1>
            </div>
               <div className="col-sm">
               <DatePicker 
                value={fromDate}
                onChange={handleChange(fromDateAction,toDate,fetchAction)}
                className="mt-3 col-md-12 col-offset-4"
                />
           </div>
           <hr/>
        </div>
      </div>
)}
const handleChange = (action,toDate,fetchAction) => (fromDate) =>{
    if(dateIsAfterTodate(fromDate,toDate))
        alert('from date must be before to date')
    else
    fetchAction(action(fromDate))
}
const dateIsAfterTodate = (fromdate,toDate)=>{
    return (fromdate>=toDate)?true:false
}
const mapDispatchToProps = (dispatch) => {
    return{
    fromDateAction: date => fromDateAction(date),
    fetchAction: (fromDateAction) => dispatch(fetchAction(fromDateAction)) 
    }
}
const mapStateToProp = (state) => {
    return {fromDate: state.fromDate, toDate:state.toDate}
}

const selectFromDate = connect(mapStateToProp,mapDispatchToProps)(React.memo(date_picker_From_component))

export default selectFromDate