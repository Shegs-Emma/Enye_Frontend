import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Gallery from '../Gallery/Gallery';

const Wrapper = () => {
    const [ queryItem, setQueryItem ] = useState('');


    // Send the query item to the Gallery
    const handleQuery = (query) => {
        setQueryItem(query);
    }

    // reset the query item, so my other components will work.
    const resetQuery = (itm) => {
        setQueryItem(itm)
    }

    return (
        <React.Fragment>
            <Dashboard myQuery={handleQuery} />
            <Gallery queryItem={queryItem} resetter={resetQuery} />
        </React.Fragment>
    )
}

export default Wrapper;