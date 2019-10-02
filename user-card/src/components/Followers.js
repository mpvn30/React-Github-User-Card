import React from 'react';

function Followers(props){
    console.log(props, `followers component`);
    return(
        <>
            {props.followers.map(follower => (
                <div key={props.id} alt={props.login} className="follower-card">
                    <h3>{follower.login}</h3>
                    <p>{follower.url}</p>
                </div>
            ))}
        </>
    )
}

export default Followers;