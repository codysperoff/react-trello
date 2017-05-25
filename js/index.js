import React from 'react';
import ReactDOM from 'react-dom';

//import Board from './components/board';
import Card from './components/card';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Card />, document.getElementById('title'))
);
