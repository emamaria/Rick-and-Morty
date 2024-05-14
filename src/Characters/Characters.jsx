import PropTypes from 'prop-types'

export const Characters = ({name, image, id}) => {


  return (
   
       <div id={id} className="character-container">
       <p className="font text-style">{name}</p>
        <img  className="font img-style" src={image}  alt={name}/>
       </div>
   
  )
}

Characters.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id:  PropTypes.string.isRequired
}
