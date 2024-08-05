import React from 'react'
import Mine from  '../assets/images/Mine.jpg'

export  function Productcard(props) {
  return (
    <div>
        <div class="card">
  
   <h1>{props.name}</h1>   {/* //because its name export so we can export directly into index.js using component name */}
  < img src={Mine} alt= " Elavarasu " />
  <p class="title">CEO & Founder, Example</p>
  <p>{props.income}</p>
  <p>{props.brand}</p>
 
  <p><button>Contact</button></p>
</div>
    </div>
  )
}
