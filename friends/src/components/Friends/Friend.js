import React from 'react';
import {Friend} from './styleFriends';

export default function(props){
    return (
        <Friend>
            <img src='https://loremflickr.com/320/240' alt={props.friend.name}/>
            <div>
                <h2>{props.friend.name}</h2>
                <p>{props.friend.email}</p>
                <p>age: {props.friend.age}</p>
            </div>
        </Friend>
    )
}