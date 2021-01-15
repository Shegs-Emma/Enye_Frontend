import React from 'react';
import classes from './Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ totalPages, handleClick, currentPage, prev, next }) => {

    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    let stylePrev = prev ? classes.Disabled : classes.Button;
    let styleNext = next ? classes.Disabled : classes.Button;

    const handleNext = () => {
        if (currentPage >= 1 || currentPage <= pages.length) {
            let nextPage = currentPage + 1;
            handleClick(nextPage);
        }
    }

    const handlePrev = () => {
        if (currentPage >= 1 || currentPage <= pages.length) {
            let prevPage = currentPage - 1;
            handleClick(prevPage)
        }
    }

    return (
        <React.Fragment>
            <div className={classes.Pagination}>
                <button className={stylePrev} onClick={handlePrev} disabled={prev}>
                    <FontAwesomeIcon icon={faAngleLeft} size="lg" color="#FFFFFF" className={classes.Toggle} />
                </button>
                <button className={styleNext} onClick={handleNext} disabled={next}>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" color="#FFFFFF" className={classes.Toggle} />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Pagination;