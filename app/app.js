import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';

require('./styles/app.scss');

render(<Application/>, document.getElementById('application'));
