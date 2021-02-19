import React from 'react';
import User from './User';
import './UsersList.css';
import { motion } from 'framer-motion'


function UsersList ({users}) {
    
    return (
        <motion.div className="users__list" initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }} >
            {users.map((user) => {
                const {name:{title, first, last}, location:{street:{number, name}, city, state}, email, phone, cell, dob:{age}, registered:{date}, picture:{large}} = user;
                return (
                   <User key={date} title={title} firstName={first} lastName={last} streetNum={number} streetName={name} city={city} state={state} email={email} phone={phone} cell={cell} age={age} registered={date} picture={large} />
                )
            })}
        </motion.div>
    )
       
}

export default UsersList;