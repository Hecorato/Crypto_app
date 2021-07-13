import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Error = ({mensaje}) => 
     ( 
         <MsgError>{mensaje}</MsgError>
      );

 Error.propTypes = {
    message: PropTypes.string.isRequired
 };
export default Error;

const MsgError = styled.p`
    background-color: #D01137;
    padding: 0.5rem;
    color: #fff;
    font-size: 20px;
    text-transform:uppercase;
    font-weight:bold;
    text-align: center;
    font-family:'Montserrat Alternates', sans-serif;
    border-radius: 1rem;
`;