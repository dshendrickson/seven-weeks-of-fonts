import React, { Component } from 'react';
import { pick, map, extend } from 'lodash';
import WeekOne from './WeekOne';
import WeekTwo from './WeekTwo';
import WeekThree from './WeekThree';
import WeekFour from './WeekFour';

export default class Application extends Component {

  render() {
    return (
      <div>
        <h2>Seven Weeks of Fonts</h2>
        <WeekOne />
        <WeekTwo />
        <WeekThree />
        <WeekFour />
      </div>
    )
  }
}
