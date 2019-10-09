import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 7742fd36b619bf1cacecf4711d208a7823ffcc4c6f11cf04ccf0f6ba7103e7cd"
      }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
export default App;
