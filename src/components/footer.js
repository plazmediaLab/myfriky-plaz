// eslint-disable-next-line
import React from "react"
// Gatsby 
import { Link } from 'gatsby';
// Styled components 
// import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavStyled = styled.nav`
  background-color: var(--grape-dark-2);
  padding: .8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  *{
    color: #fff;
  }

  @media (max-width: 768px){
    flex-direction: column;
    padding: 1.5rem .8rem;

    a{
      text-align: center;
      justify-content: center;
      padding: 0;
      min-height: min-content;
    }
  }
`;


const Footer = ({ title }) => {
  
  const year = new Date().getFullYear();
  
  return (
    <NavStyled className="mt-6">
      <Link className="navbar-logo txt-strong" to="/" title="MyFriky PLAZ Home page">
        {title}
      </Link> 
      <p>All rights reserved &copy; {year} · www.plazmedi.com</p>
    </NavStyled>
  )
}

export default Footer