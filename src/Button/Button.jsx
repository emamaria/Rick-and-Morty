import React from 'react'

export const Button = ({buttonName, onClick}) => {
  return (
  
      <button className="button-style"onClick={onClick}>{buttonName}</button>
 
    
  )
}
