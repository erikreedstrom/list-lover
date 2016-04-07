import React from 'react';
import moment from 'moment';

function isHalloweenHorror(date, genre) {
  return genre === 'Horror' && date.month() === 9 && date.date() === 31;
}

function sameMonthInAWeek(date) {
  return moment(date).add(1, 'w').month() === date.month();
}

function isFridayFinance(date, genre) {
  return genre === 'Finance' && date.isoWeekday() === 5 && !sameMonthInAWeek(date);
}

function getIndicatorClass(date, genre) {
  if (isHalloweenHorror(date, genre)) {
    return 'BookEntry--halloweenHorror';
  }

  if (isFridayFinance(date, genre)) {
    return 'BookEntry--fridayFinance';
  }
}

let BookEntry = React.createClass({
  render () {
    let date = moment(this.props.published);
    return (
      <div className={"BookEntry " + getIndicatorClass(date, this.props.genre)}>
        <div className="BookEntry-primary">
          <h1 className="BookEntry-title">{this.props.name}</h1>
          <h2 className="BookEntry-author">{this.props.author.name}</h2>
        </div>
        <div className="BookEntry-meta Meta">
          <div className="Meta-group">
            <div className="Meta-title">gender</div>
            <div className="Meta-definition">{this.props.author.gender}</div>
          </div>
          <div className="Meta-group">
            <div className="Meta-title">genre</div>
            <div className="Meta-definition">{this.props.genre}</div>
          </div>
          <div className="Meta-group">
            <div className="Meta-title">published</div>
            <div className="Meta-definition">
              <span className="BookEntry-date--long">{date.format('dddd, MMMM Do YYYY')}</span>
              <span className="BookEntry-date--short">{date.format('MM/DD/YYYY')}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default BookEntry;
