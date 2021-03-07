import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    // friends.map(friend => <h1 key={friend.id}>{friend.name}</h1>)
    return (
        <div>
            {
                friends.map(frnd => <Friend 
                    key = {frnd.id}
                    friend = {frnd}
                    showDetails = {true}
                />)
            }
        </div>
    );
};

export default Friends;