import React from 'react'

const Greetings = (props) => {
   return  props.timeofDay==='morning' ?(<h1>Good morning</h1>) : (<h1>Good Afternoon</h1>)
//   return (
//     <div>Greetings</div>
//   )
}

export default Greetings

// or the another way of doing what u do
// const Greetings = ({timeofDay}) => {
//     return  timeofDay==='morning' ?(<h1>Good morning</h1>) : (<h1>Good Afternoon</h1>)
 
//  }
 
//  export default Greetings