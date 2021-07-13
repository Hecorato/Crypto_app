import React,{Fragment,useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const useCryptoMoneda = (label,stateInicial,SeleccionCM) => {
    

    const[state,setState]=useState(stateInicial);
    
    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}:</Label>
            <Selects onChange={e =>setState(e.target.value)} value={state}>
                
                <option value="">-- Seleccione su CryptoMoneda --</option>
                {SeleccionCM.map(seleccionCM =>(
                <option key={seleccionCM.CoinInfo.Id} value={seleccionCM.CoinInfo.Name}>{seleccionCM.CoinInfo.FullName}</option>
                ))}
            </Selects>
        </Fragment>
    );

    return[state,SelectCrypto,setState]
}

export default useCryptoMoneda;

const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    color:white;
    text-transform: uppercase;
    font-weight: bold;
    font-size:1.5rem;
    margin-top: 2rem;
    display:block;
    
`; 
const Selects = styled.select`
    font-size: 1.2rem;
    margin-top:1rem;
    justify-content:center ;
    width: 90%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none
`;