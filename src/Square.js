import React from 'react'

const Square = ({color}) => {
  return (
    <section className='square' style={{backgroundColor: color}}>
        <p>{color ? color : "Enter a color"}</p>
    </section>
  )
}

export default Square