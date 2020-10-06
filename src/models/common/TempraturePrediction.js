const WeatherPrediction = require('./WeatherPrediction')

class TempraturePrediction extends WeatherPrediction{
        constructor(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric){

            super(timeDate,placeString,typeString,unitString,fromNumeric,toNumeric)
        }

        convertToF(){
            if(this.unitString = "C")
              {
                this.fromNumeric = (this.fromNumeric*1.8)+32  
                this.toNumeric =    (this.toNumeric*1.8)+32
                this.unitString = "F"
              }
        
        }
        convertToC(){

            if(this.unitString = "F")
            {
              this.fromNumeric = (this.fromNumeric-32)/1.8  
              this.toNumeric =    (this.toNumeric-32)/1.8
              this.unitString = "C"
            }
      

        }


}

module.exports = TempraturePrediction