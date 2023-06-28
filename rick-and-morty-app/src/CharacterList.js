import './CharacterList.css';
import CharacterListItem from "./CharacterListItem";

function CharacterList({list, selectedCharacterChange}) {
  return (
    <div className="character-list">
      {list.map(item => (
        <div key={item.id} onClick={() => selectedCharacterChange(item)}>
          <CharacterListItem character={item}/>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
