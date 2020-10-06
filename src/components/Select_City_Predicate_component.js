import React from 'react'
import { connect } from 'react-redux'
import cityAction from '../actions/select_city_predicate_action'
import fetchData from '../actionCreators/weatherDataFetch'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.css'
import {cityOptions} from '../constants/options'

function predicate_select_component({cityAction,fetchAction,isLoading,city}){
         return(
                <div id = 'predicateSelectComponent' className='container'>
                   <div className="row">
                   <div className="col-sm">
                   <h1>city:</h1>
                    </div>
                       <div className="col-sm">
                    <Select 
                        isDisabled = {isLoading}
                        onChange={handleChange(cityAction,fetchAction)}
                        className="mt-3 col-md-6 col-offset-4"
                        options={cityOptions}/>
                        </div>
                   </div>
                </div>
        )
}
const handleChange = (cityAction,fetchAction) => (e)=>{
      let city = e.value
      fetchAction(cityAction(city))
}
const mapDispatchToProps = (dispatch) =>{
        return{
        cityAction: city => cityAction(city),
        fetchAction: (cityAction) => dispatch(fetchData(cityAction)) 
        }
}
const mapStateToProp = (state) => {
        return {isLoading:state.isLoadingData,city:state.city,}
      }
const selectCity = connect(mapStateToProp,mapDispatchToProps)(React.memo(predicate_select_component))

export default selectCity