const Temprature = require("./Temprature")
const Precipitation = require("./Precipitation")
const Wind = require("./Wind")
const CloudCoverage = require("./CloudCoverage")
const DateInterval = require("./DateInterval")

class WeatherHistory {


    constructor(dataInputArray = []) {

        this.dataArray = dataInputArray

    }
    forPlace(place) {
        let filtteredData =  this.dataArray.filter(elm => elm.place() === place)
        return new WeatherHistory(filtteredData)

    }
    forType(type) {
        let filtteredData =  this.dataArray.filter(elm => elm.type() === type)
        return new WeatherHistory(filtteredData)
    }
    forPeriod(dateInterval) {
        let filtteredData =  this.dataArray.filter(elm => dateInterval.contains(elm.time()))
        return new WeatherHistory(filtteredData)
    }
    including(data){
        return new WeatherHistory(this.dataArray.concat(data))
    }
    convertToUSUnits() {

        this.dataArray.forEach(element => {
          
            switch (element.constructor) {
                case Temprature: element.convertToF()
                break; 
                case Precipitation: element.convertToInches()
                break;
                case Wind: element.convertToMPH()
                break;
                
                default:break;
            }

        })
        return this

    }
    convertToInternationalUnits() {

        this.dataArray.forEach(element => {
               
            switch (element.constructor) {
                case Temprature: element.convertToC()
                break; 
                case Precipitation: element.convertToMM()
                break; 
                case Wind: element.convertToMS()
                break; 
                default:break; 
            }

        })
        return this
    }
    lowestValue(){
        if(this.dataArray.length != 0)
        return this.dataArray.sort((a,b) =>  a.value() - b.value())[0].value()
    }

    data() {
        return this.dataArray
    }



}

module.exports = WeatherHistory