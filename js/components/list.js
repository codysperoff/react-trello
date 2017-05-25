import React from 'react';
import Card from './card';

export default function List(props) {
    return (
        <div className="cards-list">

            <Card text="This is a card." />
            <Card text="This is a card." />
            <Card text="This is a card." />
        </div>
    );
}
