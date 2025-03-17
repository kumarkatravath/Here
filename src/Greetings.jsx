import React from 'react'

const Greetings = (props) => {
   return  props.timeofDay==='morning' ?(<h1>Good morning</h1>) : (<h1>Good Afternoon</h1>)
//   return (
//     <div>Greetings</div>
//   )
}

export default Greetings