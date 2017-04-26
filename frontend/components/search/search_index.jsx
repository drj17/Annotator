import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: "",
      results: this.props.results,
      dropdown: "hidden"
    };

    this.update = this.update.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  update(e){
    this.setState({query: e.currentTarget.value});
    this.props.fetchSearchResults(e.currentTarget.value);
  }


  closeSearch(){
    this.setState({query: "", dropdown: "hidden"});
    this.props.clearResults();
  }

  toggleDropdown(){
    this.setState({dropdown: "visible"});
  }
  render(){
    let searchResults = "";
    let searchHeader = "";
    if(this.props.results.length > 0){
      searchResults = this.props.results.map(track => <SearchIndexItem key={track.id} track={track} closeSearch={this.closeSearch} />);
      searchHeader = <h1 className="search-header">Search Results</h1>;
    } else if(this.state.query.length > 0){
      searchResults = <span className="no-results">No Results :(</span>;
    }

    return (
      <div className="search-section">
        <input
          onClick={() => this.toggleDropdown()}
          className="search-bar"
          onChange={this.update}
          placeholder="Search"
          type="text"
          value={this.state.query}/>
        <ul className={`search-result-list ${this.state.dropdown}`}
            onBlur={() => this.closeSearch()}
          >

          {searchHeader}
          {searchResults}
        </ul>
      </div>

    );
  }
}

export default SearchIndex;
