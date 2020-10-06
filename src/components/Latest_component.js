import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'

function latest_component({latestData}){
     
     return(
        <div className="container">
        <Table>
        <thead className="thead-dark">
          <tr scope="row">
            <th scope="col">Latest Mesaurement</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
            <th>Temprature</th>
            <td>{latestData.temprature}</td>
          </tr>
          <tr scope="row">
            <th>precip</th>
            <td>{latestData.precition}</td>
          </tr>
          <tr scope="row">
            <th>wind</th>
            <td>{latestData.wind}</td>
          </tr>
          <tr scope="row">
            <th>Cloud coverage</th>
            <td>{latestData.cloud}</td>
          </tr>
          
        </tbody>
      </Table>
      </div>
    )
}

const mapStateToProp = (state) => {
    return {latestData:state.latestData}
  }
  
  const Latest = connect(mapStateToProp)(React.memo(latest_component))
  
  export default Latest