/**
 * All dates have their time floored to excactly midnight
 */

export function get5DaysEarlier(){
    let date = new Date()
    date.setHours(0,0,0,0)
    date.setDate(date.getDate()-5)
    return date
}
export function getToday(){
     let date = new Date()
     date.setHours(0,0,0,0)
    return date
}
export function daysBetween(from,to){
    let timeDifference = Date.parse(to)-Date.parse(from)
    return timeDifference/(1000 * 3600 * 24)
}
export function isAdayOfThePast(input){
        const inputtedTime = Date.parse(input.time)
        
        if(inputtedTime >= new Date().getTime())
            return false
            
        return true
    
}
