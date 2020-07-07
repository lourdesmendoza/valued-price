import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultQuotation = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextQuotes = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ quotation}) => {

    return ( 
        (quotation === 0)
            ? <Message>Choose brand, year and plan</Message> 
            : ( 
                <ResultQuotation>
                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={quotation}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <TextQuotes>The total is: $ <span>{quotation}</span></TextQuotes>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultQuotation>
            )
    )
}

Result.propTypes = {
    quotation: PropTypes.number.isRequired
}
 
export default Result;