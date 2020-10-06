const WeatherPrediction = require('./WeatherPrediction')

class CloudCoveragePrediction extends WeatherPrediction{

    constructor(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric){

        super(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric)
    }


}

module.exports = CloudCoveragePrediction