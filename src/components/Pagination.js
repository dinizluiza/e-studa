import React from 'react'
import "./PaginationStyles.css";

const Pagination = ({redsPerPage, total, paginate}) => {

    var pageNumber = [];

    for(let i=0; i<Math.ceil(total / redsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumber.map(number => (
                    <li onClick={() => paginate(number+1)} key={number} className='buttonItem'>
                        <button>{number+1}</button>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Pagination;