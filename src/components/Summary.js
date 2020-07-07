import React, {Fragment} from 'react';

const Summary = ( {data} ) => {

    // Get data
    const {brand, year, plan} = data;

    if (brand === '' || year === '' || plan === '') return null;

    return ( 
        <Fragment>
            <h2>Quote Summary</h2>
            <ul>
                <li>Brand: </li>
                <li>Plan: </li>
                <li>Year: </li>
            </ul>
        </Fragment>
     );
}
 
export default Summary;