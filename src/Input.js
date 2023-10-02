import React from 'react'

const Input = ({color, setColor}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color</label>
        <input
            autoFocus
            required
            type='text'
            placeholder='Add Color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
        
    </form>
  )
}

export default Input