/**@jsx jsx */
// eslint-disable-next-line
import React from 'react';
// Gatsby
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
// Componentes 
import Layout from '../components/layout';
// Style components 
import { css, jsx } from '@emotion/core';

export const query = graphql`
  query( $slug: String! ){
    allDatoCmsRoom(filter: {slug: {eq: $slug}}){
      nodes{
        title
        content
        image{
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;

const RoomsTemplate = ({ data }) => {

  const { title, content, image } = data.allDatoCmsRoom.nodes[0];

  return (
    <Layout>
      <div className="container vm-2">

        <div css={css`
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 1.5rem;
        `}>
          <Link to="/" className="btn btn-grape">&lt;&lt; Back </Link>
          <h1>{title}</h1>
        </div>
        <p>{content}</p>
        <Image fluid={image.fluid} css={css`
          margin: 2rem 0;
        `}/>

      </div>
    </Layout>
  );
};

export default RoomsTemplate;