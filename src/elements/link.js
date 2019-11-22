import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const LinkWrap = styled.a`
  text-decoration: none;
  color: ${props => props.color};
  display: block;

  :hover {
    color: ${props => props.hover};
    text-transform: inherit;
  }
`;

const link = props => (
  <LinkWrap href={props.url} color={props.color} hover={props.hover}>
    {props.title}
  </LinkWrap>
);

LinkWrap.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  hover: PropTypes.string,
  title: PropTypes.string
};

export default link;
