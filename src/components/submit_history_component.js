import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { cityOptions, historyTypeOptions,unit } from '../constants/options'
import {addWeatherHistoryData} from '../models/fetch/WeatherHistoryService'
import {getUnitSymbol} from '../helpers/InputModelHelper'
import fetchAction from '../actionCreators/weatherDataFetch'

function submit_History_Component({fetchAction}) {
    return (
        <div className='class="border border-dark'>
            <form onSubmit={handleSubmit(fetchAction)} name='SubmitHistory' >
                <div className='container' name='inputs'>
                    <div className="row">
                        <div className='col mt-3 col-md-1 col-offset-4'>Type</div>
                        <div className='col mt-3 col-md-3 col-offset-4'>City</div>
                        <div className='col mt-3 col-md-1 col-offset-4'>Unit</div>
                        <div className='col mt-3 col-md-3 col-offset-4'>Date</div>
                        <div className='col mt-3 col-md-3 col-offset-4' >Value</div>
                    </div>
                    <div className='row'>  
                    <div className='col mt-3 col-md-2 col-offset-4'>             
                <Select
                    name='type'
                    options={historyTypeOptions}
                /></div>
                <div className='col mt-3 col-md-2 col-offset-4'>  
                <Select
                    name='city'
                    options={cityOptions}
                /> </div>
                <div className='col mt-3 col-md-2 col-offset-4' >  
                <Select
                    name='unit'
                    options={unit}
                /></div>
                <div className='col mt-3 col-md-3 col-offset-4'>  
                <input 
                    type="datetime-local" 
                    name='dateTime'
                    max={new Date()}
                    required
                /></div>
                <div className='col mt-3 col-md-2 col-offset-4'>  
                <input type='number'
                         name='value'
                        required
                        />
                        </div>
                </div>
                </div>
               <input 
                    type='submit' 
                    value='submit weather history' 
                    className="mt-3 col-md-2 col-offset-4"
                    onSubmit={handleSubmit(fetchAction)}
                    />
            </form>
        </div>
    )

}
const handleSubmit =  (fetchAction) => async (e) => {
    e.preventDefault()
    const place = e.target.city.value
    const type = e.target.type.value
    const unit = getUnitSymbol(e.target.unit.value,type)
    const time = e.target.dateTime.value
    const value = e.target.value.value
   
    
    const wasPosted = await addWeatherHistoryData({place,type,unit,time,value})
  
        if(wasPosted)
            fetchAction(()=>{return {type:'defaultAction'}})
        else
            alert('Data was not submitted to the server, due to error')
   
}
const mapDispatchToProps = (dispatch) =>{
    return{
    fetchAction: (action) => dispatch(fetchAction(action))
    }
}

const submitHistory = connect(null,mapDispatchToProps)(React.memo(submit_History_Component))

export default submitHistory

