import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContentSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`;

const Summary = ( {data} ) => {

    // Get data
    const {brand, year, plan} = data;

    if (brand === '' || year === '' || plan === '') return null;

    return ( 
        <ContentSummary>
            <h2>Quote Summary</h2>
            <ul>
                <li>Brand: {brand} </li>
                <li>Plan: {plan} </li>
                <li>Year of the car: {year} </li>
            </ul>
        </ContentSummary>
     );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Summary;