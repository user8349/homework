import './App.css';
import SearchBar from "./SearchBar";
import {useEffect, useState} from "react";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(result => result.json())
      .then(result => {
        setCharacterList(result.results ?? []);
        setSelectedCharacter(null);
      });
  }, [query]);

  return (
    <div className="app">
      <div className="app__header">
        <SearchBar query={query} queryChange={event => setQuery(event)}/>
      </div>
      <main className="app__body">
        {characterList.length > 0
          ? (<>
            <CharacterList
              list={characterList}
              selectedCharacterChange={event => setSelectedCharacter(event)}/>
            { selectedCharacter && (<CharacterInfo character={selectedCharacter}></CharacterInfo>)}
          </>)
          : (<>
            <span>Поиск не дал результата...</span>&nbsp;
            <button onClick={() => setQuery('')}>сбросить</button>
          </>)
        }
      </main>
    </div>
  );
}

export default App;
