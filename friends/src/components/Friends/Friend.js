import React from 'react';
import {Friend} from './styleFriends';

export default function(props){
    return (
        <Friend>
            <img alt={props.friend.name}/>
            <div>
                <h2>Name: {props.friend.name}</h2>
                <p>{props.friend.email}</p>
                <p>{props.friend.age}</p>
            </div>
        </Friend>
    )
}