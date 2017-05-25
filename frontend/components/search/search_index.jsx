import React from 'react';
import SearchIndexItem from './search_index_item';
import onClickOutside from 'react-onclickoutside';
import { hashHistory } from 'react-router';

class SearchIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: "",
      results: props.results,
      dropdown: "hidden"
    };

    this.update = this.update.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleClickOutside(){
    this.closeSearch();
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
    let that = this;
    document.addEventListener('keypress', (e) => {
      if(e.code === "Enter" && that.props.results.length > 0){
        hashHistory.push(`/songs/${that.props.results[0].id}`);
        that.setState({query: ""});
        that.props.clearResults();
        that.closeSearch();
        document.getElementById('search-bar').blur();
      }
    });
  }
  render(){
    let searchResultsArtists = "";
    let searchResultsTitles = "";
    let searchHeaderArtists = "";
    let searchHeaderTitles = "";
    let artists = this.props.results.songArtists;
    let titles = this.props.results.songTitles;
    if(artists.length > 0 || titles.length > 0){
      if(artists.length > 0){
        searchResultsArtists = artists.map(track => <SearchIndexItem
         key={track.id}
         track={track}
         closeSearch={this.closeSearch}
         closeAnnotation={this.props.closeAnnotation}
          />);
          searchHeaderArtists = <h2>Artists</h2>;
        }
        if(titles.length > 0){
          searchResultsTitles = titles.map(track => <SearchIndexItem
            key={track.id}
            track={track}
            closeSearch={this.closeSearch}
            closeAnnotation={this.props.closeAnnotation}
            />);
          searchHeaderTitles = <h2>Titles</h2>;
        }
    } else if(this.state.query.length > 0){
      searchResultsArtists = <span className="no-results">No Results :(</span>;
    }

    return (
      <div className="search-section">
        <input
          onClick={() => this.toggleDropdown()}
          className="search-bar"
          id="search-bar"
          onChange={this.update}
          placeholder="Search Songs and Artists"
          type="text"
          value={this.state.query}/>
        <ul className={`search-result-list ${this.state.dropdown}`}>
          {searchHeaderTitles}
          {searchResultsTitles}
          {searchHeaderArtists}
          {searchResultsArtists}
        </ul>
      </div>

    );
  }
}

export default onClickOutside(SearchIndex);
