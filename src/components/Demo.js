import React, { useState } from 'react'

//we export this function in default way so we declare this component name in app.js//
function Demo() {
        const [userName , setUserName]  = useState('')
        const [displayText , setDisplayText] = useState('')

const handlerState = (e) =>
{
    setUserName(e.target.value)
    console.log(userName); 
}
const handleSubmit= () =>
{
      setDisplayText(userName)
}
  return (
    <div>
        <input type='text' value={userName} placeholder='Enter Username' onChange={handlerState}></input>
        <h1>{userName}</h1>
        <button onClick={handleSubmit}>Submit</button>
        <h1>Welcome , {displayText}...!</h1>
    </div>
  )
}

export default Demo                       
