import React from 'react';
import CityPredicateSelect from './components/Select_City_Predicate_component'
import DatePickerFrom from './components/DatePicker_From_component'
import DatePickerTo from './components/DatePicker_To_component'
import History from './components/History_component'
import TwentyFourHourPrediction from './components/TwentyFour_Hour_Predictions_component'
import SubmitHistory from './components/submit_history_component'
import Latest from './components/Latest_component'
import './App.css';

function App() {
  return (
    <div className="App">
     <CityPredicateSelect/>
     <DatePickerFrom/>
     <DatePickerTo/>
     <hr/>
     <History/>
     <hr/>
      <Latest/>
      <hr/>
     <TwentyFourHourPrediction/>
     <hr/>
     <SubmitHistory/>
    </div>
  );
}

export default App;
