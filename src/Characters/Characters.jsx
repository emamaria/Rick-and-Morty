import PropTypes from 'prop-types'

export const Characters = ({name, image}) => {


  return (
   
       <div className="character-container">
       <p className="font text-style">{name}</p>
        <img  className="font img-style" src={image}  alt={name}/>
       </div>
   
  )
}

Characters.protoTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
