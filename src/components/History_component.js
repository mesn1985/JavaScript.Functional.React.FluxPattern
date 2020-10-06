import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'
import {daysBetween} from '../helpers/DateHelper'

function history_component({fromDate,toDate,history}){
        let numberOfDays = Math.round(daysBetween(fromDate,toDate))
        return(
            <div className="container">
            <Table>
            <thead className="thead-dark">
              <tr scope="row">
                <th scope="col">Mesaurement</th>
                <th scope="col">value, for {numberOfDays} days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Highst Temprature</th>
                <td>{history.highstTemp}</td>
              </tr>
              <tr>
                <th scope="row">Lowst Temprature</th>
                <td>{history.lowstTemp}</td>
              </tr>
              <tr>
                <th scope="row">Total precip</th>
                <td>{history.totalPrecip}</td>
              </tr>
              <tr>
                <th scope="row">Dominant wind direction</th>
                <td>{history.dominantWindDirection}</td>
              </tr>
              <tr>
                <th scope="row">Average Cloud coverage</th>
                <td>{history.avgCloudCov}</td>
              </tr>
              
            </tbody>
          </Table>
          </div>
        )
}

const mapStateToProp = (state) => {
  return {fromDate: state.fromDate, toDate:state.toDate, history:state.history}
}
const History = connect(mapStateToProp)(React.memo(history_component))

export default History