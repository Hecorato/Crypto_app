import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Imgcrypto from './img/cryptomonedas.png'
import Form from './components/Form';
import Cotizacion from './components/Cotizacion';
import axios from 'axios'; 
import Spinner from './components/Spinner';

function App() {
  
  //States para trabajar con monedas
  const[moneda,setMoneda]=useState('');
  const[crytoMoneda,setCryptoMoneda]=useState('');
  
  //states de cotizacion
  const[resultado,setResultado]=useState({});
  
  //State Spinner
  const[cargando,setCargando]=useState(false);
  useEffect(()=>{
    //conicional de ejecucion

    if(moneda==='')return;

    //Consultar API para completar cotizacion

      const cotizarCrypto = async () => {
      
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crytoMoneda}&tsyms=${moneda}`;
        
        const resultado = await axios.get(url);

        //Mostrar Spinner
          setCargando(true)
        //Oculatar y mostrar resultado
          setTimeout(() => {
            // Cambiar estado de cargando
            setCargando(false);
            //Guardar Cotizacion
            setResultado(resultado.data.DISPLAY[crytoMoneda][moneda])
          },3000)  

      }
        cotizarCrypto();

  },[moneda,crytoMoneda])
  
    //Mostrar Spinner o resltado
    const componente =(cargando)?<Spinner/>:<Cotizacion resultado={resultado}/>

  return (
    
    <Container>
      <div>
        <Imagen
          src={Imgcrypto}
          alt="Crypto"
        />
      </div>
      <div>
        <Heading>Cotizadodor de Criptomonedas al Instante</Heading>
        <Form
          setMoneda={setMoneda}
          setCryptoMoneda={setCryptoMoneda}
        />

        {componente}
        
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width:1500px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  }
`;
const Imagen =styled.img`
  max-width: 90%;
  margin-top: 2rem;
`;
const Heading = styled.h1`
  font-family: 'Montserrat Alternates', sans-serif;
  color:white;
  font-weight: 700;
  font-size: 50px;
  margin-bottom:50px;
  margin-top:10px;
  text-align: left;
  &::after {
    content:'';
    width:200px;
    height:6px;
    background-color: #66a2fe;
    display:block;
  }
`;