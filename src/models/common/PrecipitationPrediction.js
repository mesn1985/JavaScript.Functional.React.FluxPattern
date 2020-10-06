const WeatherPrediction = require('./WeatherPrediction')

class PrecipitationPrediction extends WeatherPrediction{

    constructor(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric,typesStringArray){
        super(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric)

        this.typesStringArray = typesStringArray
    }

    types(){return this.typesStringArray}

    convertToInches(){
        if(this.unitString = "mm")
        {
          this.fromNumeric = this.fromNumeric/25.4
          this.toNumeric =    this.toNumeric/25.4
          this.unitString = "Inches"
        }
    }
    convertToMM(){
        if(this.unitString = "Inches")
        {
          this.fromNumeric = this.fromNumeric*25.4
          this.toNumeric = this.toNumeric*25.4
          this.unitString = "mm"
        }

    }
}

module.exports = PrecipitationPrediction