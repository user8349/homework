import './CharacterInfo.css';
import Avatar from "./Avatar";

function CharacterInfo({character}) {
  return (
    <div className="character-info">
      <Avatar src={character.image} size="200px"/>
      <div className="character-info__content">
        <div className="character-info__header">
          <h1>{character.name}</h1>
          <span className="character-info__status">{character.status}</span>
        </div>
        <table>
          <thead>
          <tr>
            <th style={{width: '100px'}}></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Species:</td>
            <td>{character.species}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{character.gender}</td>
          </tr>
          <tr>
            <td>Origin:</td>
            <td>{character.origin.name}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{character.location.name}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CharacterInfo;
