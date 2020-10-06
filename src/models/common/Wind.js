const WeatherData = require('./WeatherData')

class Wind extends WeatherData {

    constructor(timeDate, placeString, typeString, unitString, valueNumeric, directionString) {
        super(timeDate, placeString, typeString, unitString, valueNumeric)

        this.directionString = directionString
    }

    convertToMPH() {
        if (this.unitString === "m/s") {
           this.valueNumeric = this.valueNumeric * 2.2369
            this.unitString = "MPH"
        }

    }
    convertToMS() {
        if (this.unitString === "MPH") {
            this.valueNumeric = this.valueNumeric / 2.2369
            this.unitString = "m/s"

        }

    }
    direction() { return this.directionString }

}

module.exports = Wind