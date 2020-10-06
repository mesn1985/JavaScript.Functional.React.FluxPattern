const WeatherPrediction = require('./WeatherPrediction')

class WindPrediction extends WeatherPrediction{

    constructor(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric,directionsStringArray){
        super(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric)
        this.directionsStringArray = directionsStringArray
    }

    directions(){return this.directionsStringArray}

    convertToMPH(){ 
                if(this.unitString==="m/s")
                {
                    this.fromNumeric = this.fromNumeric*2.236936
                    this.toNumeric = this.toNumeric*2.236936
                    this.unitString = "MPH"
                }
    }
    convertToMS(){
        if(this.unitString==="MPH")
        {
            this.fromNumeric = this.fromNumeric/2.236936
            this.toNumeric = this.toNumeric/2.236936
            this.unitString = "m/s"
        }
    }

}

module.exports = WindPrediction