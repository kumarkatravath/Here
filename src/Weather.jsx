import React from 'react'

const Weather = () => {

    let temp=15
    if(temp <15){
        return  <h1>Its cold af,outside</h1>
    }
    else if(temp>= 15 && temp<= 25){

        return <h1>Its cozy outside</h1>
    }
    else if(temp>25){
        return <h1>Its hot af,outside</h1>

    }


//   return (
//     <div>Weather</div>
//   )
}

export default Weather