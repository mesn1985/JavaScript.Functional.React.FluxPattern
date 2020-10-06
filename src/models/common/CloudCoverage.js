const WeatherData = require('./WeatherData')

class CloudCoverage extends WeatherData {

    constructor(timeDate,placeString,typeString,unitString,valueNumeric){
            super(timeDate,placeString,typeString,unitString,valueNumeric)
    }

}

module.exports = CloudCoverage