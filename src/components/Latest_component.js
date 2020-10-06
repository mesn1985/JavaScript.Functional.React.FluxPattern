import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'

function latest_component({latestData}){
     
     return(
        <div className="container">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Latest Mesaurement</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temprature</td>
            <td>{latestData.temprature}</td>
          </tr>
          <tr>
            <td>precip</td>
            <td>{latestData.precition}</td>
          </tr>
          <tr>
            <td>wind</td>
            <td>{latestData.wind}</td>
          </tr>
          <tr>
            <td>Cloud coverage</td>
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