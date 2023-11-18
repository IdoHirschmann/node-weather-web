const request = require('request')


const weather = (location, callback) => {


    const url = 'http://api.weatherstack.com/current?access_key=17994038861a7a0f7980058a66541bf0&query=' + encodeURIComponent(location)

    request({url , json: true}, (error, {body} = {})=> {
            if(error){
                callback('unable to reach api')
            }else if(body.error)
            {
                callback('unable to find location ' + location)
            }else{
                callback(undefined,body.current.weather_descriptions[0] + '. It is now currently ' + body.current.temperature + ' degrees')
            }
            })
}

module.exports = {
    weather: weather
}