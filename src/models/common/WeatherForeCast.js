const WeatherHistory = require("./WeatherHistory")
const TempraturePrediction = require("./TempraturePrediction")
const PrecipitationPrediction = require("./PrecipitationPrediction")
const WindPrediction = require("./WindPrediction")

class WeatherForecast {

    constructor(dataInputArray = []) {

        this.dataArray = dataInputArray

    }

forPlace(place) {
    let filtteredData =  this.dataArray.filter(elm => elm.place() === place)
    return new WeatherForecast(filtteredData)

}
forType(type) {
    let filtteredData =  this.dataArray.filter(elm => elm.type() === type)
    return new WeatherForecast(filtteredData)
}
forPeriod(dateInterval) {
    let filtteredData =  this.dataArray.filter(elm => dateInterval.contains(elm.time()))
    return new WeatherForecast(filtteredData)
}
including(data){
    return new WeatherForecast(this.dataArray.concat(data))
}

convertToUSUnits() {

    this.dataArray.forEach(element => {
      
        switch (element.constructor) {
            case TempraturePrediction: element.convertToF()
            break; 
            case PrecipitationPrediction: element.convertToInches()
            break;
            case WindPrediction: element.convertToMPH()
            break;
            
            default:break;
        }

    })
    return this

}
convertToInternationalUnits() {

    this.dataArray.forEach(element => {
           
        switch (element.constructor) {
            case TempraturePrediction: element.convertToC()
            break; 
            case PrecipitationPrediction: element.convertToMM()
            break; 
            case WindPrediction: element.convertToMS()
            break; 
            default:break; 
        }

    })
    return this
}

avarageFromValue(){
    let total = 0
    this.dataArray.forEach(i => total += i.from()) 
    return total / this.dataArray.length || 'No Data'
}

avarageToValue(){
    let total = 0
    this.dataArray.forEach(i => total += i.to()) 
    return total / this.dataArray.length || 'No Data'
}

data() {
    return this.dataArray
}

}

module.exports = WeatherForecast