import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
  height: 500px;

  @media (max-width: 768px){
    height: 250px;
  }
`;

const TextBanner = styled.div`
  color: #fff;
  background: 
    linear-gradient(to bottom, rgba(0,0,0,.65) 0%, rgba(0,0,0,.2) 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  text-align: center;

  *{
    margin: 0;
    text-shadow: 0px 2px 2px rgba(0,0,0,0.8);
  }
  h1{
    font-weight: 600;
    font-size: 5rem;
  }
  p{
    font-weight: 600;
    font-size: 3rem;
    color: var(--grape-light-2);
  }

  @media (max-width: 768px){
    h1{
      font-size: 3.8rem;
    }
    p{
      font-size: 1.9rem;
    }
  }
`;

const Banner = () => {

  const { imageBanner } = useStaticQuery(graphql`
  query {
    imageBanner: file(relativePath: {eq:"1.jpg"}){
      sharp: childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `)

  // console.log(imageBanner.sharp.fluid);

  return (
    <ImageBackground tag="section" fluid={imageBanner.sharp.fluid} fadeIn="soft">
      
      <TextBanner>
        <h1>Welcome to PLAZresort HOTEL</h1>
        <p>Your favorite place to vacation with your family.</p>
      </TextBanner>

    </ImageBackground>
  );
};

export default Banner;