const WeatherData = require('./WeatherData')

class Tempreature extends WeatherData{

    constructor(timeDate, placeString, typeString, unitString, valueNumeric){
        super(timeDate, placeString, typeString, unitString, valueNumeric)
    }

    convertToF(){
            if(this.unitString==="C")
            {
                this.valueNumeric =  this.valueNumeric * 1.8 + 32 
                this.unitString = "F"
            }
    }
    convertToC(){
            if(this.unitString ==="F")
            {
                this.valueNumeric = (this.valueNumeric - 32) / 1.8
                this.unitString = "C"
            }

    }

}

module.exports = Tempreature