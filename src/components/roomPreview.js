// eslint-disable-next-line
import React from 'react';
// Gatsby
import Image from 'gatsby-image';
import { Link } from 'gatsby';
// Styled component

const RoomPreview = ({ data }) => {

  const { title, content, image, slug } = data;

  return (
    <div className="card">
      <Image fluid={image.fluid} alt="Image room" />
      <div className="card-body">
        <h4>{title}</h4>
        <p>{content}</p>
        <hr/>
        <Link to={slug} className="btn btn-100 btn-grape">
          See room
          &nbsp;<i className="a-link-line af-m"></i>
        </Link>
      </div>
    </div>
  );
};

export default RoomPreview;