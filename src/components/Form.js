import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import useMoneda from '../Hooks/useMoneda'; 
import useCryptoMoneda from '../Hooks/useCryptoMoneda';
import Error from './Error';
import axios from 'axios';
import PropTypes from 'prop-types';
const Form = ({setMoneda,setCryptoMoneda}) => {

    const[listaCripto,setListaCripto]=useState([]);
    const[error,setError]=useState(false)

    const MONEDAS =[
        {codigo: 'USD',nombre: 'Dolar EstadoUnidense'},
        {codigo: 'MXN',nombre: 'Peso Mexicano'},
        {codigo: 'EUR',nombre: 'Euro'},
        {codigo: 'GBP',nombre: 'Libra Esterlina'}
    ]
    const[moneda,Eleccion]= useMoneda('Elige tu Moneda','',MONEDAS);
    const[crypto,SelectCrypto]=useCryptoMoneda('Elige tu CriptoMoneda','',listaCripto);

    //Llamado API

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            setListaCripto(result.data.Data)
        }

        consultarAPI();
    },[]);
    
    const cotizar = e => {
        e.preventDefault();

        //Validacion de datos
        if(moneda===''||crypto===''){
            setError(true);
            return;
        }

        setError(false);
        setMoneda(moneda);
        setCryptoMoneda(crypto);
    }

    return ( 
        <form
            onSubmit={cotizar}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/>:null}
            <Eleccion/>
            <SelectCrypto/>
            <Button type="submit">Cotizar</Button>
        </form>
     );
}
Form.propTypes ={
    setMoneda: PropTypes.func.isRequired,
    setCryptoMoneda: PropTypes.func.isRequired
} 
export default Form;

const Button = styled.button`
    margin-top:20px;
    margin-right:10px;
    font-weight: bold;
    font-size:20px;
    padding:20px;
    background-color:#FFB703;
    border:none;
    color:white;
    width:99%;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover{
        background-color:#FD9E02;
        cursor: pointer;
    }
`;
