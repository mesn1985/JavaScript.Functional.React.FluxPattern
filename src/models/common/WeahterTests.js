const WheatherHistory = require("./WeatherHistory")
const Temprature = require("./Temprature")
const Precipitation = require("./Precipitation")
const Wind = require("./Wind")
const CloudCoverage = require("./CloudCoverage")
const DateInterval = require("./DateInterval")
const Assert = require("assert")

const WHOBJ1 = new WheatherHistory()

const type = "type"
const date = new Date(1990,1,1)
const place  ="place"

WHOBJ1.setCurrentPlace(place)
WHOBJ1.setCurrentPeriod(new DateInterval(new Date(1990,1,1),new Date(1990,1,3)))
WHOBJ1.setCurrentType(type)

WHOBJ1.add(
    [   //all unit in internationl units
        new Temprature(date,place,type,"Celsius",1),
        new Precipitation(date,place,type,"MM",1), 
        new Wind(date,place,type,"MS",1,"North"),
        new CloudCoverage(date,place,type,"oktas",1)

    ]   
    )
    //Filter Return
    Assert(WHOBJ1.data().length===4)
    WHOBJ1.add(new Temprature(date,place,"different Type","Celsius",1)) // type not the current Type
    Assert(WHOBJ1.data().length===4)
    WHOBJ1.add(new Precipitation(new Date(2000,1,1),place,type,"MM",1)) //Date outside the current intervall added
    Assert(WHOBJ1.data().length===4)
    WHOBJ1.add(new Wind(date,"AnotherPlace",type,"MS",1,"North")) // place not the current type
    Assert(WHOBJ1.data().length===4)
    WHOBJ1.setCurrentType("different Type")
    Assert(WHOBJ1.data().length===1)
    WHOBJ1.setCurrentPlace(place)
    WHOBJ1.setCurrentPeriod(new DateInterval(new Date(1990,1,1),new Date(1990,1,3)))
    WHOBJ1.setCurrentType(type)
    Assert(WHOBJ1.data().length===4)
        //ChangingUnit
    WHOBJ1.convertToUSUnits()
    let forbiddenUnitTypes = ["MS","MM","Celsius"]
    const containsInternationalUnits =  WHOBJ1.data().some(element=> forbiddenUnitTypes.includes(element.unit()))
    Assert(!containsInternationalUnits)
    WHOBJ1.convertToInternationalUnits()
    forbiddenUnitTypes = ["Inches","MPH","Fahrenheit"]
    const containsUS = WHOBJ1.data().some(element=> forbiddenUnitTypes.includes(element.unit()))
    Assert(!containsUS)
    //TempratureTest
    const tempraObj = new Temprature(date,place,type,"Celsius",1)
    Assert(tempraObj.value()===1)
    Assert(tempraObj.time().getTime()===date.getTime())
    Assert(tempraObj.place()===place)
    Assert(tempraObj.type()===type)
    Assert(tempraObj.unit()==="Celsius")
    tempraObj.convertToF()
    Assert(tempraObj.unit()==="Fahrenheit")
    Assert(tempraObj.value()===33.8)
    tempraObj.convertToC()
    Assert(tempraObj.unit()==="Celsius")
    Assert(Math.round(tempraObj.value())===1)

    //WindTest
    const windObj = new Wind(date,place,type,"MS",1,"North")
    Assert(windObj.value()===1)
    Assert(windObj.time().getTime()===date.getTime())
    Assert(windObj.place()===place)
    Assert(windObj.type()===type)
    Assert(windObj.unit()==="MS")
    Assert(windObj.direction()==="North")
    windObj.convertToMPH()
    Assert(windObj.unit()==="MPH")
    Assert(windObj.value()===2.2369)
    windObj .convertToMS()
    Assert(windObj.unit()==="MS")
    Assert(Math.round(windObj.value())===1)

    //Precipitation
    const precepObj = new Precipitation(date,place,type,"MM",1)
    Assert(precepObj.value()===1)
    Assert(precepObj.time().getTime()===date.getTime())
    Assert(precepObj.place()===place)
    Assert(precepObj.type()===type)
    Assert(precepObj.unit()==="MM")
    precepObj.convertToInches()
    Assert(precepObj.unit()==="Inches")
    Assert(precepObj.value()===0.0394)
    precepObj.convertToMM()
    Assert(precepObj.unit()==="MM")
    Assert(Math.round(precepObj.value())===1)

    //CloudCoverage
    const cloudObj = new CloudCoverage(date,place,type,"oktas",1)
    Assert(cloudObj.value()===1)
    Assert(cloudObj.time().getTime()===date.getTime())
    Assert(cloudObj.place()===place)
    Assert(cloudObj.type()===type)
    Assert(cloudObj.unit()==="oktas")



  
    