import React from 'react';
import { Link } from 'react-router-dom';


const Friend = (props) => {
   
    const {name, email, phone, id, username} = props.friend;
    const style ={
        border: '1px solid black',
        backgroundColor: "lightGray",
        margin: 'auto',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '2px 2px 5px',
        width: '50%',
        marginTop: '15px'
    }
    //  console.log(props.showDetails);
     const showDetails = props.showDetails;
    
    return (
        <div style={style}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h5>Phone: {phone}</h5>
            {
                (showDetails) ? <Link to={`/details/${id}`}><button>show more</button></Link> : 
                <>
                <h5>UserName: {username}</h5>
                <Link to="/friends"><button>Back</button></Link>
                </>
            }
        </div>
    );
};

export default Friend;