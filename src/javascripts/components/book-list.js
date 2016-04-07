import React from 'react';
import ReactList from 'react-list';
import Lazy from 'lazy.js';
import reqwest from 'reqwest';

import BookEntry from './book-entry';
import BookListHeader from './book-list-header';

let BookList = React.createClass({
  getInitialState() {
    return {
      filter: {
        gender: "",
        genre: ""
      },
      sort: '',
      books: [],
      sortedByName: null,
      sortedByTitle: null,
      filtered: [],
      loading: false,
      listRefreshKey: Math.random()
    };
  },

  load() {
    if (!!this.state.loading) { return; }

    this.setState({ loading: true, loadingMsg: '' });
    console.log(`Retrieving data.`);
    reqwest({
      url: '/books.json'
    }).then(resp => {
      console.log(`Loading records.`);
      this.forceUpdate();
      // A bit of fake indexing to speed up later
      let sortedByName = Lazy(resp).sortBy((book) => book.author.name);
      let sortedByTitle = Lazy(resp).sortBy((book) => book.name);

      this.setState({
        books: resp,
        filtered: resp,
        sortedByName: sortedByName.toArray(),
        sortedByTitle: sortedByTitle.toArray(),
        loading: false
      });
      console.log(`Loaded ${this.state.books.length} records.`);
    }).fail((err, msg) => {
      console.error(msg);
      this.setState({ loading: false });
    });
  },

  componentDidMount() {
    this.load();
  },

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sort !== this.state.sort || prevState.filter !== this.state.filter) {
      this.updateBooks();
    }
  },

  handleSort(value) {
    this.setState({sort: value});
  },

  handleFilter(value) {
    this.setState({filter: value});
  },

  updateBooks() {
    console.log('Updating Books');
    let chain;
    let sort = this.state.sort;
    // Use presorted list for speed
    switch(sort) {
      case 'author.name':
        chain = Lazy(this.state.sortedByName);
        break;
      case 'name':
        chain = Lazy(this.state.sortedByTitle);
        break;
      default:
        chain = Lazy(this.state.books);
    }

    let filter = this.state.filter;
    if(filter.gender.length > 0 || filter.genre.length > 0){
      Lazy(filter).pairs()
        .map(([k, v]) => {
          return ((book) => {
            // No filter applied
            if (v.length === 0) { return true; }

            // Naive property get
            let property;
            switch(k){
              case 'gender' :
                property = book.author[k];
                break;
              default:
                property = book[k];
            }

            // Allow multiple filters in same category
            for (let i=0; i < v.length; i++) {
              if (property == v[i]) { return true; }
            }

            // If no match, return false
            return false;
          })
        })
        .each((pred) => chain = chain.filter(pred));
    }

    // List refresh key forces the list to update without scrolling
    this.setState({ filtered: chain.toArray(), listRefreshKey: Math.random() });
  },
  
  renderItem(index, key) {
    let book = this.state.filtered[index];
    return <BookEntry
      key={key}
      id={book.id}
      name={book.name}
      author={book.author}
      genre={book.genre}
      published={book.published}
    />;
  },

  renderList() {
    return (
      <div className="BookList-list" style={{overflow: 'auto', maxHeight: '100vh'}}>
        <ReactList key={this.state.listRefreshKey}
                   pageSize={30}
                   itemRenderer={this.renderItem}
                   length={this.state.filtered.length}
                   type='uniform'
                   useTranslate3d={true}/>
      </div>
    )
  },
  
  renderLoading() {
    return (
      <div className="BookList-loading">
        <div className="BookList-loadingMsg">Retrieving data. Just a few seconds...</div>
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    )
  },

  render() {
    let view;
    if (this.state.loading) {
      view = this.renderLoading();
    } else {
      view = this.renderList();
    }
    return (
      <div className="BookList">
        <BookListHeader
          sort={this.state.sort}
          filter={this.state.filter}
          onSort={this.handleSort}
          onFilter={this.handleFilter}
        />
        { view }
      </div>
    );
  }
});

export default BookList;
