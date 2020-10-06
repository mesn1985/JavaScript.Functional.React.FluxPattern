
const WeatherPredection = require("./WeatherPrediction")
const TempraturePrediction = require("./TempraturePrediction")
const PrecipitationPrediction = require("./PrecipitationPrediction")
const WindPrediction = require("./WindPrediction")
const CloudCoveragePrediction = require("./CloudCoveragePrediction")
const WeatherForecast = require("./WeatherForecast")
const DateInterval = require("./DateInterval")
const assert = require('assert')

//WeatherForecast
const WFOBJ = new WeatherForecast()
const date = new Date(1990,1,1)
const type = "type"
const place = "place"

WFOBJ.add(
        [
            new TempraturePrediction(date,place,type,"Celsius",1,4),
            new PrecipitationPrediction(date,place,type,"MM",1,4,["string1","string2"]),
            new WindPrediction(date,place,type,"MS",1,4,["string1","string2"]),
            new CloudCoveragePrediction(date,place,type,"okta",1,4)
        ]

)
WFOBJ.setCurrentPlace(place)
WFOBJ.setCurrentType(type)
WFOBJ.setCurrentPeriod(new DateInterval(new Date(1989,1,1),new Date(1995,1,1)))
assert(WFOBJ.data().length==4)
WFOBJ.add( new TempraturePrediction(date,"AnotherPlace",type,"Celsius",1,4))
assert(WFOBJ.data().length==4)
WFOBJ.setCurrentPlace("AnotherPlace")
assert(WFOBJ.data().length==1)
WFOBJ.setCurrentPlace(place)
assert(WFOBJ.data().length==4)
WFOBJ.convertToUSUnits()
let forbiddenUnitTypes = ["MS","MM","Celsius"]
const containsInternationalUnits =  WFOBJ.data().some(element=> forbiddenUnitTypes.includes(element.unit()))
assert(!containsInternationalUnits)
WFOBJ.convertToInternationalUnits()
forbiddenUnitTypes = ["Inches","MPH","Fahrenheit"]
containsUSUnits =  WFOBJ.data().some(element=> forbiddenUnitTypes.includes(element.unit()))
assert(!containsUSUnits)
//Temprature Prediction Tests
const tempraPredObj = new TempraturePrediction(date,place,type,"Celsius",1,4)
assert(tempraPredObj.time().getTime()===date.getTime())
assert(tempraPredObj.place()===place)
assert(tempraPredObj.type()===type)
assert(tempraPredObj.unit()==="Celsius")
assert(tempraPredObj.from()===1)
assert(tempraPredObj.to()===4)
tempraPredObj.convertToF()
assert(tempraPredObj.unit()==="Fahrenheit")
assert(tempraPredObj.from()===33.80)
assert(tempraPredObj.to()===39.2)
tempraPredObj.convertToC()
assert(tempraPredObj.unit()==="Celsius")
assert(Math.round(tempraPredObj.from())===1)
assert(Math.round(tempraPredObj.to())===4)

//PrecipitationPrediciton test
const precipPredObj =  new PrecipitationPrediction(date,place,type,"MM",1,4,["string1","string2"])
assert(precipPredObj.time().getTime()===date.getTime())
assert(precipPredObj.place()===place)
assert(precipPredObj.type()===type)
assert(precipPredObj.unit()==="MM")
assert(precipPredObj.from()===1)
assert(precipPredObj.to()===4)
precipPredObj.convertToInches()
assert(precipPredObj.unit()==="Inches")
assert(precipPredObj.from()===0.03937007874015748)
assert(precipPredObj.to()===0.15748031496062992)
precipPredObj.convertToMM()
assert(Math.round(precipPredObj.from())===1)
assert(Math.round(precipPredObj.to())===4)

//WindPredictionTest
const windPredObj = new WindPrediction(date,place,type,"MS",1,4,["string1","string2"])
assert(windPredObj.time().getTime()===date.getTime())
assert(windPredObj.place()===place)
assert(windPredObj.type()===type)
assert(windPredObj.unit()==="MS")
assert(windPredObj.from()===1)
assert(windPredObj.to()===4)
const directions = windPredObj.directions()
assert(directions.includes("string1"))
assert(directions.includes("string2"))
windPredObj.convertToMPH()
assert(windPredObj.unit()==="MPH")
assert(windPredObj.from()===2.236936)
assert(windPredObj.to()===8.947744)
windPredObj.convertToMS()
assert(Math.round(windPredObj.from())===1)
assert(Math.round(windPredObj.to())===4)

//Cloud coverage Test
const cloudpredObj =  new CloudCoveragePrediction(date,place,type,"okta",1,4)
assert(cloudpredObj.time().getTime()===date.getTime())
assert(cloudpredObj.place()===place)
assert(cloudpredObj.type()===type)
assert(cloudpredObj.unit()==="okta")
assert(cloudpredObj.from()===1)
assert(cloudpredObj.to()===4)

//WeatherPredictionTest
const arrayOfFourmatchingWeahterObjects =  [
    new TempraturePrediction(date,place,type,"unit",1,4),
    new PrecipitationPrediction(date,place,type,"unit",1,4,["string1","string2"]),
    new WindPrediction(date,place,type,"unit",1,4,["string1","string2"]),
    new CloudCoveragePrediction(date,place,type,"unit",1,4)
]
assert(arrayOfFourmatchingWeahterObjects[0].mathches(arrayOfFourmatchingWeahterObjects[1]))
assert(arrayOfFourmatchingWeahterObjects[2].mathches(arrayOfFourmatchingWeahterObjects[3]))
const arrayOfFourNONmatchingWeahterObjects =  [
    new TempraturePrediction(date,place,type,"unit1",1,4),
    new PrecipitationPrediction(date,place,"type2","unit",1,4,["string1","string2"]),
    new WindPrediction(date,"another place",type,"unit",1,4,["string1","string2"]),
    new CloudCoveragePrediction(new Date(2020,1,1),place,type,"unit",1,4)
]
assert(!arrayOfFourNONmatchingWeahterObjects[0].mathches(arrayOfFourNONmatchingWeahterObjects[1]))
assert(!arrayOfFourNONmatchingWeahterObjects[2].mathches(arrayOfFourNONmatchingWeahterObjects[3]))