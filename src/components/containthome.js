/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
// Gatsby
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
// Styled Components 
import { css, jsx } from '@emotion/core';
import { ContentTextGrid } from './styled-components/index';

const ContaintHome = () => {

  const responseData = useStaticQuery(graphql`
  query {
    allDatoCmsPage(filter: {slug: {eq: "home"}}){
      nodes {
        titulo
        content
        image {
          fluid{
            ...GatsbyDatoCmsFluid
          }
        }
        slug
      }
    }
  }
  `);

  
  const { titulo, content, image } = responseData.allDatoCmsPage.nodes[0];
  
  // console.log(image.fluid.src);

  return (
    <>

      <h2
        css={css`
          text-align: center;
          margin: 2.5rem 0;
        `}
      >{titulo}</h2>

      <ContentTextGrid>
        <p>{content}</p>
        <Image fluid={image.fluid} alt="Home page image"/>
      </ContentTextGrid>

    </>
  );
};

export default ContaintHome;