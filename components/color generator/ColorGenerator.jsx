import React, { useState } from 'react'
import './colorGenerator.css'

const ColorGenerator = () => {
  const [bgColor, setBgColor] = useState('blue')
  
  const backgroundChanger =()=> {
    let ourColor = '#'
    const hexCode = 'ABCDEF0123456789'

    for(let i=0; i < 6; i++){
      const randomNumber = hexCode[Math.floor(Math.random()*hexCode.length)]
      ourColor += randomNumber
    }
    console.log(ourColor)
    setBgColor(ourColor)

  }
  
  return (
    <div>
      <small>COLOR GENERATOR COMPONENT</small>
      <div style={{background: `${bgColor}`, height: '100px', width: '100px'}} ></div>
      <button onClick={backgroundChanger}>Click to change Background Color</button>
    </div>
  )
}

export default ColorGenerator