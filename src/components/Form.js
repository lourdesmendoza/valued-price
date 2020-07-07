import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getDifferenceYear, calculateBrand, getPlan } from '../helper';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const Input = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;

    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Form = ({ setSummary, setLoader }) => {
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    // Extract the values
    const { brand, year, plan } = data; 

    // Read the form data y set state
    const getInfo = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    // Submit event
    const handleSubmit = e => {
        e.preventDefault();
        
        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Base 2000
        let result = 2000;

        // Obtain difference of years
        const difference = getDifferenceYear(year);

        // For each year 3% must be subtracted
        result -= (( difference*3) * result) / 100;

        // American 15%
        //  Asian 5%
        //  European 30%
        result = calculateBrand(brand)*result;


        // Basic plan increases by 20%
        // Full plan increases by 50%
        const increasePlan = getPlan(plan);
        result = parseFloat(increasePlan * result).toFixed(2);

        setLoader(true);
        
        setTimeout(() => {
            setLoader(false);
        
            // Total
            setSummary({
                quotation: Number(result),
                data,
            })
        }, 3000);
    };


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ?
                <Error>
                    All fields are required
                </Error>
                : null 
                
            }
            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <Input
                    type="radio"
                    name="plan"
                    value="Basic"
                    checked={plan === "Basic"}
                    onChange={getInfo}
                /> Basic

                <Input
                    type="radio"
                    name="plan"
                    value="Full"
                    checked={plan === "Full"}
                    onChange={getInfo}
                /> Full
            </Field>

            <Button type="submit">Quote</Button>
        </form>
     );
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoader: PropTypes.func.isRequired
}
 
export default Form;