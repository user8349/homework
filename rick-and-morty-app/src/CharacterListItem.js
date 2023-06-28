import './CharacterListItem.css';
import Avatar from "./Avatar";

function CharacterListItem({character}) {
  return (
    <div className="character-list-item">
      <Avatar src={character.image} size="40px"/>
      <div className="character-list-item__content">
        <strong>{character.name}</strong>
        <span>{character.species} – {character.origin.name}</span>
      </div>
    </div>
  );
}

export default CharacterListItem;
