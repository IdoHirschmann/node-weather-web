const request = require('request')


const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=265bb1f87a5a564f8f187f1d42ad8480&query=' + encodeURIComponent(address)
   
    request({url , json: true}, (error, {body} = {})=> {
            if(error){
                callback('unable to reach api geo')
            }else if(body.error)
            {
                callback('unable to find location coords')
            }else{
                callback(undefined,{lat: body.data[0].latitude, len: body.data[0].longitude})
            }
            })
}

module.exports = {
    geocode: geocode
}