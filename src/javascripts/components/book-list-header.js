import React from 'react';
import RadioGroup from 'react-radio-group';
import Checkbox from 'react-checkbox';

let BookListHeader = React.createClass({
  handleChangeSort(value) {
    this.props.onSort(value);
  },

  handleChangeFilter() {
    let filter = { gender: [], genre: [] };
    Array.from(document.querySelectorAll('input[name=filter]:checked'))
      .forEach((e) => {
        let [k,v] = e.value.split("=");
        filter[k].push(v);
      });
    this.props.onFilter(filter);
  },

  render () {
    let filter = this.props.filter || [];
    return (
      <div className="BookListHeader">
        <div className="BookListHeader-controls">
          <RadioGroup name="sort" selectedValue={this.props.sort} onChange={this.handleChangeSort}>
            {Radio => (
              <div>
                <label className="BookListHeader-label">sort</label>
                <Radio value="" />None
                <Radio value="author.name" />Author Name
                <Radio value="name" />Book Title
              </div>
            )}
          </RadioGroup>
          <div>
            <label className="BookListHeader-label">filter</label>
            <Checkbox onChange={this.handleChangeFilter}
                      name="filter"
                      value="gender=Male"
                      checked={filter.gender.includes('Male')}/>Male
            <Checkbox onChange={this.handleChangeFilter}
                      name="filter"
                      value="gender=Female"
                      checked={filter.gender.includes('Female')}/>Female
            <Checkbox onChange={this.handleChangeFilter}
                      name="filter"
                      value="genre=Fantasy"
                      checked={filter.genre.includes('Fantasy')}/>Fantasy
            <Checkbox onChange={this.handleChangeFilter}
                      name="filter"
                      value="genre=Finance"
                      checked={filter.genre.includes('Finance')}/>Finance
            <Checkbox onChange={this.handleChangeFilter}
                      name="filter"
                      value="genre=Horror"
                      checked={filter.genre.includes('Horror')}/>Horror
            <Checkbox onChange={this.handleChangeFilter}
                      name="filter"
                      value="genre=Steampunk"
                      checked={filter.genre.includes('Steampunk')}/>Steampunk
          </div>

        </div>
      </div>
    );
  }
});

export default BookListHeader;
