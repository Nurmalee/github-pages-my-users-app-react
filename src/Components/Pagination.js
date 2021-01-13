import React from 'react';
import './Pagination.css';

function Pagination({usersPerPage, totalUsers, paginate}) {
    
    const pageNumbers = [];
    for (let i=1; i <= Math.ceil(totalUsers/usersPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="list__pagination-btns">
            {pageNumbers.map(pageNumber => <button className="pagination__btn" key={pageNumber} onClick={() => paginate(pageNumber)}>{pageNumber}</button> )}
        </div>
    )
}

export default Pagination
