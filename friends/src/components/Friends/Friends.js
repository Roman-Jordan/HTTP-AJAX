import React from 'react';
import {Link} from 'react-router-dom';
import Friend from './Friend';
import {Friends} from './styleFriends';


export default function FriendsList(props){
    console.log(props.friends);
    
    return(
        <>
        <h1>My Friends</h1>
        <Friends>
                {props.friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
        </Friends>
        </>
    )
}