import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Cotizacion = ({resultado}) => {
    
    if(Object.keys(resultado).length ===0) return null;
    
    
    return (
        <ResultadoDIV>
            <Caja>
                <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
                <P>Precio más Alto de Día: <span>{resultado.HIGHDAY}</span></P>
                <P>Precio más Bajo de Día: <span>{resultado.LOWDAY}</span></P>
                <P>Variacion útimas 24hrs.: <span>{resultado.CHANGEPCT24HOUR}</span></P>
                <P>Última Actualización: <span>{resultado.LASTUPDATE}</span></P>
            </Caja>
        </ResultadoDIV>
     );
}
 
Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
};
export default Cotizacion;


const ResultadoDIV=styled.div`
    color: white;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4.41096px 33.0822px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(7.71918px);
    width: 564px;
    height: 210px;
    left: 92px;
    top: 110px;
    margin-left:2rem;
    

border-radius: 22.0548px;

`;
const P =styled.p`
    font-size: 17px;
    span{
        font-weight: bold;
    }
`;
const Precio = styled.p`
    font-size:30px;
    font-weight: bold;
`;
const Caja =styled.div`
    margin-left:2rem;
`;