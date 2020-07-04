const request=require('request')

const geocode=(address, callback)=>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoiaXJhanF1cmVzaGkiLCJhIjoiY2tic2hmeGsyMDAyYTJ4bmZjbmhsanN6MyJ9.LXCSC_QhryMwvQk8cNS3Ig&limit=1'
    request({url, json: true},(error,{body})=>{
        if(error){
            callback('Unable to connect to the internet', undefined)
        }else if(body.features.length===0){
            callback('Unable to find location. Try again with different search term', undefined)

        }else{
            
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude: body.features[0].center[0],
                location:body.features[0].place_name
        

            })
        }


    })
}

module.exports=geocode


