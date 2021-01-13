import React, { useState } from 'react';
import './User.css';
import MoreUserDetails from './MoreUserDetails';
import { Avatar } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';

function User({title, firstName, lastName, streetNum, streetName, city, state, email, age, registered, phone, cell, picture}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="user__profile">
            <div className="user__profile-details">
                <div>
                    <Avatar src={picture} className="picture-avatar" />
                </div>

                <div className="user__info">
                    <h4>{title} {firstName} {lastName}</h4>
                    <h5>{streetNum} {streetName}, {city}, {state} </h5>
                    <div className="user__contact">
                        <p><BiEnvelope /> {email}</p>
                        <p><FiPhoneCall /> {phone}</p>
                    </div>
                </div>
            </div>

            <div className="user__btn" onClick={() => setIsOpen(true)}>
                <ArrowForwardIcon className="user__btn-icon" />
            </div>

            <MoreUserDetails title={title} firstName={firstName} lastName={lastName} streetNum={streetNum} streetName={streetName} city={city} state={state} email={email} phone={phone} cell={cell} age={age} registered={registered} picture={picture} open={isOpen} onClose={() => {setIsOpen(false)}} />

        </div>
    )
}

export default User