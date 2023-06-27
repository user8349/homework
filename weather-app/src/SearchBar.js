import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
        <label for="city">Введите город:</label>
        <input type="text" id="city"></input>
    </div>
  );
}

export default SearchBar;