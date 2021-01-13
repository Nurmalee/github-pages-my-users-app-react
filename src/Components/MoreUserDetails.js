import React from 'react';
import ReactDom from 'react-dom';
import './MoreUserDetails.css';
import { Avatar } from '@material-ui/core';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';

function MoreUserDetails ({title, firstName, lastName, streetNum, streetName, city, state, email, phone, cell, age, registered, open, onClose, picture}) {
    if(!open) return null
    return ReactDom.createPortal (
        <>
        <div className="overlay">
        <div className="modal">
            <button onClick={onClose} className="back-to-results-btn"> < BsArrowLeftShort className="back-arrow-icon"/> RESULTS/DASHBORAD </button>
            <div className="more__user-details">
                <Avatar src={picture} className="user__picture"/>
                <div className="other__details">
                    <h3 className="user__name">{title} {firstName} {lastName} <span>{age}</span> </h3>
                    <p className="user__address">{streetNum} {streetName}, {city}, {state} </p>
                    <p className="user__email"> <BiEnvelope /> {email}</p>
                    <p className="user__registered"> JOINED: {registered.slice(0, 10)}</p>
                    <p className="user__phone"> <FiPhoneCall /> {phone}</p>
                    <p className="user__cell"> <BsPhone /> {cell}</p>
                </div>
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default MoreUserDetails