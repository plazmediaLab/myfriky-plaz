/**@jsx jsx */
// eslint-disable-next-line
import React from "react"
// Components
import Layout from "../components/layout"
import Banner from "../components/banner"
import ContaintHome from "../components/containthome"
import RoomPreview from '../components/roomPreview';
// Hooks
import useRooms from '../hooks/use-rooms';
// Styled components 
import { css, jsx } from '@emotion/core';
import { UlCardgrid } from '../components/styled-components/index';

const IndexPage = () => {

  const rooms = useRooms()

  return (
    <Layout>

      <Banner />

      <div className="container vm-2">

        <ContaintHome />

        <hr/>
        <h1
          css={css`
            text-align: center;
            margin: 2.5rem 0;
          `}
        >Our rooms</h1>

        <UlCardgrid
          css={css`
            margin: 0;
            padding: 0;
          `}
        >
          {rooms.map(item => (
            <RoomPreview 
              key={item.id}
              data={item}
            />
          ))}
        </UlCardgrid>

      </div>
      
    </Layout>
  )
}

export default IndexPage