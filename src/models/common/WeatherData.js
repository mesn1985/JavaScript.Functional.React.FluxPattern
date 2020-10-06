const DataAndEvent = require('./DataAndEvent')


class WeatherData extends DataAndEvent{

        constructor(timeDate,placeString,typeString,unitString,valueNumeric){
                super(timeDate,placeString,typeString,unitString)
                this.valueNumeric = valueNumeric

        }

        value(){return this.valueNumeric}


}

module.exports = WeatherData