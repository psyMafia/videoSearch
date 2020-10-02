//112
import React from "react";

class SearchBar extends React.Component<
  { externalHandler: (s: string)=> void },
  { term: string }
> {

  state = {
    term: "",
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value,
    });
  };
  
  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.externalHandler(this.state.term);

  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="inline field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}  />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
