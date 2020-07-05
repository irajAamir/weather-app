const request=require('request')

const forecast=(latitude,longitude, callback)=>{
    
    const url='http://api.weatherstack.com/current?access_key=f29c1bb65f3463bd6e172d85fe671cd0&query='+latitude+','+ longitude+ '&units=c'
    request({url, json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)

        }else if(body.error){
            callback('Unable to find location.', undefined)

        }else{
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature+" degrees out & feels like " + body.current.feelslike+".")

        }
    })
}

module.exports=forecast