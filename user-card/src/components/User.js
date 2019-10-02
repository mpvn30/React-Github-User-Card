import React from 'react';

function User(props) {
    console.log(props);
    return(
    <div key={props.id} className="user-card">
     <h3>{props.user.name}</h3>
     <p>Username: {props.user.login}</p>
     <p>Location: {props.user.location}</p>
     <p>Followers: {props.user.followers}</p>
    </div>
    );
}

export default User;