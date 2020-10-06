const DataAndEvent = require('./DataAndEvent')


class WeatherPrediction extends DataAndEvent {

    constructor( timeDate, placeString, typeString, unitString,fromNumeric,toNumeric) {
        super(timeDate, placeString, typeString, unitString)
        this.fromNumeric = fromNumeric
        this.toNumeric = toNumeric
    }

    mathches(weatherdata) {
        return weatherdata.time().getTime() === this.timeDate.getTime() &&
            weatherdata.place() === this.placeString &&
            weatherdata.type() === this.typeString &&
            weatherdata.unit() === this.unitString
    }
    toDelete(){
        this.toDate = new Date(2000, 2, 2)
    }
    from(){return this.fromNumeric}
    to(){return this.toNumeric}
}



module.exports = WeatherPrediction