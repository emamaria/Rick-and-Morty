import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({buttonName, onClick}) => {
  return (
  
      <button className="button-style" onClick={onClick}>{buttonName}</button>
 
    
  )
}

Button.propTypes = {
  buttonName: PropTypes.oneOf(['Next', 'Prev']).isRequired,
  onClick: PropTypes.func.isRequired
}
