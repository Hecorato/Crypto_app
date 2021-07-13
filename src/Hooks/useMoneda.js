import React,{Fragment,useState} from 'react';
import styled from 'styled-components';

const useMoneda = (label,stateInicial,seleccionMoneda) => {

    const[state,setState]=useState(stateInicial);
    
    const SelectMoneda = () => (
        <Fragment>
            <Label>{label}:</Label>
            <Select onChange={e =>setState(e.target.value)} value={state}>
                <option value="">-- Seleccione su Moneda --</option>
                {seleccionMoneda.map(seleccion =>(
                    <option key={seleccion.codigo} value={seleccion.codigo}>{seleccion.nombre}</option>
                    
                ))}
                console.log(seleccion.nombre)
            </Select>
        </Fragment>
    );

    return[state,SelectMoneda,setState]
}
 
export default useMoneda;

const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    color:white;
    text-transform: uppercase;
    font-weight: bold;
    font-size:1.5rem;
    margin-top: 2rem;
    display:block;
    
`; 
const Select = styled.select`
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