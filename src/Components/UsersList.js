import React from 'react';
import User from './User';
import './UsersList.css';


function UsersList ({users}) {
    
    return (
        <div className="users__list">
            {users.map((user) => {
                const {name:{title, first, last}, location:{street:{number, name}, city, state}, email, phone, cell, dob:{age}, registered:{date}, picture:{large}, id:{value}} = user;
                return (
                   <User key={value} title={title} firstName={first} lastName={last} streetNum={number} streetName={name} city={city} state={state} email={email} phone={phone} cell={cell} age={age} registered={date} picture={large} />
                )
            })}
        </div>
    )
       
}

export default UsersList;