import React, { useState, useEffect } from 'react';
import classes from './Gallery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSortDown, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Results from '../../Component/Results/Results';
import User from '../../Component/User/User';
import QueryUser from '../../Component/QueryUser/QueryUser';
import Pagination from '../../Component/Pagination/Pagination';
import { USER_PER_PAGE } from '../../utils/Constants';
import axios from 'axios';

const Gallery = ({ searchItem, queryItem, resetter }) => {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ disablePrev, setDisablePrev ] = useState(true);
    const [ disableNext, setDisableNext ] = useState(false);
    const [ selectedUserId, setSelectedUserId ] = useState('');
    const [ isViewingUser, setIsViewingUser ] = useState(false);
    const [ showCountry, setShowCountry ] = useState(true);
    const [ countryToggler, setCountryToggler ] = useState(faToggleOn);
    const [ inputValue, setInputValue ] = useState({ searchItem: '' });
    const [ query, setQuery ] = useState('');

    useEffect(() => {
        const fetchUsers = () => {
            setLoading(true);

            axios.get('https://api.enye.tech/v1/challenge/records')
            .then(res => {
                setUsers(res.data.records.profiles)
                setLoading(false);
                setTotalPages(Math.ceil(res.data.records.profiles.length / USER_PER_PAGE));
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
        }

        fetchUsers();

        
    }, []);

    // Handle Form Activities
    const handleChange = (event) => {
        setInputValue({
            [event.target.name]: event.target.value
        });
    }


    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            setQuery(event.target.value);
            setInputValue({ searchItem: '' });
        }
    }

    // Handle pagination click buttons
    const handleClick = num => {
        setPage(num);
        if (num > 1) {
            setDisablePrev(false);
            setDisableNext(false);
        } else if (num === 1) {
            setDisablePrev(true);
        }

        if (page === totalPages -1) {
            setDisableNext(true)
        } 
    }


    // Toggling between the User and results
    const handleSwitch = (attr) => {
        setIsViewingUser(attr);
    }

    const handleSearch = (attr) => {
        resetter(attr);
        setQuery('');
    }

    // Get ID of selected User
    const idSetter = (id) => {
        setSelectedUserId(id);
        setIsViewingUser(true);
    }


    let results = <Results users={users} page={page} idSetter={idSetter} showCountry={showCountry} />;

    let queryUser;
    
    if (queryItem && !query) {
        
      queryUser = <QueryUser queryItem={queryItem} users={users} viewing={handleSearch} />
    } else if (!queryItem && query) {

       queryUser = <QueryUser queryItem={query} users={users} viewing={handleSearch} />
    }

    let querySearch = queryItem || query ? queryUser : results;

    // // Decide what to display
    let displayItem = selectedUserId && isViewingUser ? <User selectedUserId={selectedUserId} users={users} viewing={handleSwitch} /> : results;


    // Selecting what to display
    let user;

    if (searchItem && searchItem === 'female') {
        user = 'Female Users';
    } else if (searchItem && searchItem === 'male') {
        user = 'Male Users';
    } else if (!searchItem || searchItem === 'all') {
        user = 'All Users';
    }

    // Handle showing of country
    const handleCountryToggle = () => {
        let isShowing = showCountry ? false : true;

        let isTogglerOn = showCountry ? faToggleOff : faToggleOn;

        setShowCountry(isShowing);

        setCountryToggler(isTogglerOn);
    }

    // Handle sorting of Users


    return (
        <div className={classes.Results}>
            <h1 className={classes.Header}> {user} </h1>

            <h5 className={classes.Filter}>Filter by</h5>

            <div className={classes.Sorter}>
                <div className={classes.Find}>
                    <FontAwesomeIcon icon={faSearch} color="#262A41" className={classes.Search} />
                    <input className={classes.ListInput}
                        type="text" 
                        name="searchItem" 
                        value={inputValue.searchItem}
                        onKeyDown={handleSubmit} 
                        onChange={handleChange} 
                        placeholder="Find in list" />
                </div>

                <div className={classes.Country}>
                    <h5>Country</h5>
                    <FontAwesomeIcon icon={faSortDown} color="#3C3F54" className={classes.SortDown} />
                </div>

                <div className={classes.Show}>
                    <h6>Show Country</h6>
                    <FontAwesomeIcon icon={countryToggler} size="lg" color="#30BBB5" className={classes.Toggle} onClick={handleCountryToggle} />
                </div>
            </div>

            {(() => {
                if (loading) {
                    return <p>loading...</p>;
                } else if (queryItem || query) {
                    return querySearch
                } else if (!queryItem && !query) {
                    return displayItem
                }
            })()}
            
            <Pagination 
                totalPages={totalPages} 
                handleClick={handleClick} 
                currentPage={page} 
                prev={disablePrev}
                next={disableNext}
                />
        </div>
    )
}

export default Gallery;