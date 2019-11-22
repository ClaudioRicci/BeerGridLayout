import * as React from "react";
import styled from "styled-components";
import { device } from "../helpers";
import PropTypes from "prop-types";

const Image = styled.img`
  display: inline-block;
  height: 100vh;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }
`;

const image = props => {
  return (
    <>
      <Image src={props.url} />
    </>
  );
};

image.propTypes = {
  url: PropTypes.string
};

export default image;
