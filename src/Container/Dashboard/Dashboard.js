import React, { useState } from 'react';
import classes from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Dashboard = ({ myQuery }) => {
    const [ inputValue, setInputValue ] = useState({ searchItem: '' });
    const [ query, setQuery ] = useState('');

    const handleChange = (event) => {
        setInputValue({
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            setQuery(event.target.value);
            setInputValue({ searchItem: '' });
            myQuery(query);
        }
    }

    
    return (
        <div className={classes.Dashboard}>
            <h1><span className={classes.Hello}>Hello,</span> <span className={classes.Eme}>Emerald</span></h1>

            <h6 className={classes.Welcome}>Welcome to your dashboard, kindly sort through the user base</h6>

            <div>
                <FontAwesomeIcon icon={faSearch} color="#FFFFFF" className={classes.Search} />
                <input 
                    className={classes.Input} 
                    type="text" 
                    name="searchItem" 
                    value={inputValue.searchItem}
                    onKeyDown={handleSubmit} 
                    onChange={handleChange} 
                    placeholder="Find a user" />
            </div>

        </div>
    )
}

export default Dashboard;