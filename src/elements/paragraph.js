import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5em;
`;

const paragraph = props => {
  return <Paragraph>{props.text}</Paragraph>;
};

paragraph.propTypes = {
  text: PropTypes.string
};

export default paragraph;
