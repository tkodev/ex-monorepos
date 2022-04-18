import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: red;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
`;

const Button = ({children}) => <div>
  <StyledButton>
    {children}
  </StyledButton>
 </div>

export default Button

