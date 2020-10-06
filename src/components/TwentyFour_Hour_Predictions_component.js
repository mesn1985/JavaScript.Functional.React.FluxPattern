import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'


function twentyFour_hour_Prediction_component({twentyFourHoursPredicitions, toDate}){
   
   if(toDate<=Date.now())
        return(
          <div>Predictions or only available for date in the future, set To for a future date</div>
        )
   const items = []
   for (const [index, value] of twentyFourHoursPredicitions.entries()) {
      items.push(<tr key={index}>
          <td>{value.hour}</td>
          <td>{value.fromTemp}</td>
          <td>{value.toTemp}</td>
          <td>{value.fromPrecip}</td>
          <td>{value.toPrecip}</td>
          <td>{value.fromWind}</td>
          <td>{value.toWind}</td>
          <td>{value.fromCloud}</td>
          <td>{value.toCloud}</td>
      </tr>)
    }
  
    return (
        <div id="24predictions">
        <div className="container-fluid"><h1>24hour predictions for {toDate.toDateString()}</h1></div>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Hour</th>
            <th>Temp from</th>
            <th>Temp to</th>
            <th>Precip from</th>
            <th>Precip to</th>
            <th>Wind from</th>
            <th>Wind to</th>
            <th>Cloud Coverage from</th>
            <th>Cloud Coverage to</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
      </div>
        )
}

const mapStateToProp = (state) => {
  return {twentyFourHoursPredicitions:state.twentyFourHoursPredicitions, toDate:state.toDate}
}
const TwentyFourHours = connect(mapStateToProp)(React.memo(twentyFour_hour_Prediction_component))
export default TwentyFourHours

