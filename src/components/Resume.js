import React from 'react';
import styled from '@emotion/styled';
import { firstLetterToCapital } from './../helper';
import PropTypes from 'prop-types';

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resume = ({data}) => {
    // extract data
    const { brand, year, plan } = data;

    if ( brand === '' || year === '' || plan === '' ) return null;
    return (
        <ResumeContainer>
            <h2>Quote Resume</h2>
            <ul>
                <li>Brand: { firstLetterToCapital(brand) } </li>
                <li>Plan: { firstLetterToCapital(plan) } </li>
                <li>Year: { firstLetterToCapital(year) } </li>
            </ul>
        </ResumeContainer>
    )
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}

export default Resume;
