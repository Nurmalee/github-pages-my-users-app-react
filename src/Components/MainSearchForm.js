import React from 'react';
import ReactDom from 'react-dom';
import './MainSearchForm.css';
import { FiSearch } from 'react-icons/fi';
import './MoreUserDetails.css';
import { Avatar } from '@material-ui/core';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';

function MainSearchForm({ handleSearchFormSubmit, searchInput, handleSearchInput, searchedUser, isOpen, close}){

    return (
        <>
            <form onSubmit={handleSearchFormSubmit}>
                <div className="form-control">
                    <FiSearch className="form-control__searchIcon"/>
                    <input type="text" placeholder="Find a user" value={searchInput} onChange={handleSearchInput} />
                </div>
            </form>

            <MoreUserDetails searchedUser={searchedUser} isOpen={isOpen} close={close} />
        </>
    )
}

export function MoreUserDetails ({searchedUser, isOpen, close}) {
     const {name:{title, first, last}, location:{street:{number, name}, city, state}, email, phone, cell, dob:{age}, registered:{date}, picture:{large}} = searchedUser;


    if(!isOpen) return null
    return ReactDom.createPortal (
        <>
        <div className="overlay">
        <div className="modal">
            <button onClick={close}  className="back-to-results-btn"> < BsArrowLeftShort className="back-arrow-icon"/> RESULTS/DASHBORAD </button>
            <div className="more__user-details">
                <Avatar src={large} className="user__picture"/>
                <div className="other__details">
                    <h3 className="user__name">{title} {first} {last} <span>{age}</span> </h3>
                    <p className="user__address">{number} {name}, {city}, {state} </p>
                    <p className="user__email"> <BiEnvelope /> {email}</p>
                    <p className="user__registered"> JOINED: {date.slice(0, 10)}</p>
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


export default MainSearchForm