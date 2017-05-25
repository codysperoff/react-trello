import React from 'react';
import Card from './card';
import List from './list';

export default function Board(props) {
    return (
        <div className="board">
            <h1>{props.title}</h1>
            <div className="lists-array">{props.lists}</div>
        </div>
    );
}
