import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'
import {daysBetween} from '../helpers/DateHelper'

function history_component({fromDate,toDate,history}){
        let numberOfDays = Math.round(daysBetween(fromDate,toDate))
        return(
            <div className="container">
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Mesaurement</th>
                <th>value, for {numberOfDays} days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Highst Temprature</td>
                <td>{history.highstTemp}</td>
              </tr>
              <tr>
                <td>Lowst Temprature</td>
                <td>{history.lowstTemp}</td>
              </tr>
              <tr>
                <td>Total precip</td>
                <td>{history.totalPrecip}</td>
              </tr>
              <tr>
                <td>Dominant wind direction</td>
                <td>{history.dominantWindDirection}</td>
              </tr>
              <tr>
                <td>Average Cloud coverage</td>
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