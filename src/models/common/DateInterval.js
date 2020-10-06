export default class DateInterval{

    constructor(fromDate, toDate){
        
        this.fromDate = fromDate.getTime()
        this.toDate = toDate.getTime()
    }

    to(){return this.toDate}

    from(){return this.fromDate}

    contains(date){
        const dateInt = Date.parse(date)
        if (dateInt >= this.fromDate && dateInt <= this.toDate) 
                return true
        return false
    }

}

// module.exports = DateInterval

