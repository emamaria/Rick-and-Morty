import React from 'react'

export const Characters = ({name, image}) => {
  return (
   
       <div className="character-container">
       <p className="font text-style">{name}</p>
        <img  className="font img-style" src={image}  alt={name}/>
       </div>
   
  )
}
