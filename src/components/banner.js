import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
  height: 400px;

  @media (max-width: 768px){
    height: 250px;
  }
`;

const TextBanner = styled.div`
  color: #fff;
  background: 
    linear-gradient(to bottom, rgba(0,0,0,.85) 0%, rgba(0,0,0,.3) 100%);
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
    font-family: var(--font-1);
    font-weight: 600;
    font-size: 5rem;
  }
  p{
    font-weight: 600;
    font-size: 3rem;
    color: var(--tangerine-light-1);
  }

  @media (max-width: 768px){
    h1{
      font-size: 4.4rem;
    }
    p{
      font-size: 2.2rem;
    }
  }
`;

const Banner = () => {

  const { imageBanner } = useStaticQuery(graphql`
  query {
    imageBanner: file(relativePath: {eq:"animes-wallapaper-2.jpg"}){
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
        <h1>The best anime library</h1>
        <p>Find your favorite anime.</p>
      </TextBanner>

    </ImageBackground>
  );
};

export default Banner;