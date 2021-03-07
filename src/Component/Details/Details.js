import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const { name, email, phone, username } = details;
    // const style ={
    //     border: '1px solid black',
    //     backgroundColor: "lightGray",
    //     margin: '15px',
    //     padding: '10px',
    //     textAlign: 'center',
    //     boxShadow: '2px 2px 5px'
    // }

    return (
        <>
            <Friend
                friend = {details}
                showDetails = {false}
            />

        </>
    );
};

export default Details;