import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = () => {};

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search-input">Video Search</label>
            <input
              id="search-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
