import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const QuoteResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: solid 1px #26c6da;
    margin-top: 1rem;
    position: relative;
`;

const TotalText = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ( {quote} ) => {
    return (
        // if user don't select enything show p message. If select show quote
        (quote === 0 ) 
        ?  <Message>Select brand, year and plan </Message> 
        : (
            <QuoteResult>
                <TransitionGroup
                 component="span"
                 className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={quote}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                       <TotalText>Total is: $ <span> {quote} </span> </TotalText>
                    </CSSTransition>
                </TransitionGroup>
                
            </QuoteResult>
        )   
    )
}

Result.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Result;