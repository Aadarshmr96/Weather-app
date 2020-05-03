const request=require('request')
const forecast=(city)=>{
    //console.log(city)
 const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+city+".json?access_token=pk.eyJ1IjoiYWFkYXJzaGF0aHJleWEiLCJhIjoiY2s5cDBmbTRpMDJ5MjNrdGduNnQzN2U1bCJ9.ShETsU6pBnC_cUQ_pduVlw"
request({url:url,json:true},(error,response) => {

    if(error)
    {
        return console.log(error)
    }
        const x=response.body.features[0].center[0]
        const y=response.body.features[0].center[1]
        // console.log(x,y)
    const url1="http://api.weatherstack.com/current?access_key=9841cadc11b76fddbdc5ba7282c18a17&query="+y+','+x
    request({url:url1,json:true},(error,response)=>{
        if(error)
        {
            return console.log("Weather API error")
        }
        const temp=response.body.current.temperature
        const name=response.body.location.name
        console.log("The temperature in "+name+" is "+temp+"degrees") 
        
    })
})
}
module.exports=forecast