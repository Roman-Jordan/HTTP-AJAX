import React from 'react';
import {NavLink} from 'react-router-dom';
import {SAddFriend} from './styleFriends'

export default function AddFriend(props){
    
    return(
        <SAddFriend>
            <NavLink to='/?addFriend'>+</NavLink>
        </SAddFriend> 
    )
}