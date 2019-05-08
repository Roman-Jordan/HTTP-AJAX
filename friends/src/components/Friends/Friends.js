import React from 'react';
import Friend from './Friend';
import {Friends} from './styleFriends';


export default function FriendsList(props){
    console.log(props.friends);
    
    return(
        <>
        
        <Friends>
                {props.friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
        </Friends>
        </>
    )
}