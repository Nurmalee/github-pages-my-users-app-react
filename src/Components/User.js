import React, { useState } from 'react';
import './User.css';
import MoreUserDetails from './MoreUserDetails';
import { Avatar } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';

function User({title, firstName, lastName, streetNum, streetName, city, state, email, phone, picture}) {

    const [isOpen, setIsOpen] = useState(false);

    const showOpenBtn = () => {
        setIsOpen(true)
    }

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

            <div className="user__btn" onClick={showOpenBtn}>
                <ArrowForwardIcon className="user__btn-icon" />
            </div>

            <MoreUserDetails firstName={firstName} open={isOpen} onClose={() => {setIsOpen(false)}} />

        </div>
    )
}

export default User