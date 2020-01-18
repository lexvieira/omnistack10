module.exports = function parseStringArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim())
    //return arrayAsString != undefined ? arrayAsString.split(',').map(tech => tech.trim()) : []
}