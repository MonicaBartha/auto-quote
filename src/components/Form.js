import React, {useState} from 'react';
import styled from '@emotion/styled';

const LabelContainer = styled.div`
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

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = () => {

    const [ data, keepData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });
    const [ error, changeError ] = useState(false);

    // get the values from the state
    const { brand, year, plan } = data;

    // reading data from form and place it in the state 
    const getInfo = e => {
        keepData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }
    // when the user press submit 
    const getQuote = e => {
        e.preventDefault();
        // if inputs are empty will show error 
        if( brand.trim() === '' || year.trim() === '' || plan.trim() === '' ) {
            changeError(true);
            return
        }
        changeError(false);

        // get the value difference between years 
        
    }
    return( 
        <form
            onSubmit={getQuote}
        >
            { error ? <Error>Todos los campos son obligatoorios</Error> : null}
            <LabelContainer>
                <Label>Brand </Label>
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
            </LabelContainer>

            <LabelContainer>
                <Label>Year </Label>
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
            </LabelContainer>

            <LabelContainer>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={ plan === "basic"}
                    onChange={getInfo}
                /> Basic
                 <InputRadio 
                    type="radio"
                    name="plan"
                    value="complete"
                    checked={ plan === "complete"}
                    onChange={getInfo}
                /> Complete
            </LabelContainer>
            <Button type="submit">Get Quote</Button>
        </form>
    )
}

export default Form;