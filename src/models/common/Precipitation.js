const WeatherData = require('./WeatherData')

class Precipitation extends WeatherData{

    constructor(timeDate, placeString, typeString, unitString, valueNumeric){
        super(timeDate, placeString, typeString, unitString, valueNumeric)
    }

    //precipitation type omitted as type is already present

    convertToInches(){
                if(this.unitString==="mm"){
                    this.valueNumeric = this.valueNumeric*0.0394
                    this.unitString = "Inches"
                }
    }
    convertToMM(){
                if(this.unitString==="Inches"){
                        this.valueNumeric = this.valueNumeric/0.0394
                        this.unitString = "mm"
                }

    }

}

module.exports = Precipitation