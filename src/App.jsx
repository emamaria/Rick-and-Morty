import { useState, useEffect} from "react";
import { Button } from "./Button/Button";
import { Characters } from "./Characters/Characters";
import "./main.scss";
import { Title } from "./Title/Title";



function App() {


  const [characters, setCharacters] = useState([]);
  
  const [page, setPage] = useState(1);

  const urlPage = `https://rickandmortyapi.com/api/character?page=${page}`

  

  const getCharacters = (urlPage) => {
    fetch(urlPage).then((resp)=> {
      resp.json().then(characters =>{
        setCharacters(characters.results)
       console.log(characters);
      })
    })
    .catch(console.warn)

  }

  useEffect(()=>{
   
    getCharacters(urlPage )

  }, [urlPage])

  return (
    <div className="App">
    <Title/>

{(page > 1)&&<Button buttonName="Prev" onClick={()=> setPage(page - 1)}/>}
 {(page < 43)&&<Button buttonName="Next" onClick={()=> setPage(page + 1)}/>} 
 <div className="character-big-container" >
    {
      characters&&characters.map(character => {
         return <Characters key={character.id} name={character.name}  image={character.image}/>
      })
      
    }
    </div>
      
    </div>
  );
}


export default App;
