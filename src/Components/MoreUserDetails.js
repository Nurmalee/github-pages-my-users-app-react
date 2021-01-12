import React from 'react';
import ReactDom from 'react-dom';
import './MoreUserDetails.css';

function MoreUserDetails ({firstName, open, onClose}) {
    if(!open) return null
    return ReactDom.createPortal (
        <>
        <div className="overlay">
        <div className="modal">
            <button onClick={onClose}>Close</button>
            <p className="more__content"> {firstName} </p>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default MoreUserDetails