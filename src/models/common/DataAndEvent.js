 class DataAndEvent{

        constructor(timeDate,placeString,typeString,unitString)
        {
            this.timeDate = timeDate
            this.placeString = placeString
            this.typeString = typeString
            this.unitString = unitString
        }
        type(){return this.typeString}
        unit(){return this.unitString}
        time(){return this.timeDate}
        place(){return this.placeString}
        
}

module.exports = DataAndEvent