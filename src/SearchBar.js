import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormChange = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormChange} className="ui form">
          <div className="field">
            <label>Seach Term</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
