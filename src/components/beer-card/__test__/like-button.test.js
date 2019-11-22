import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

const LikeButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

test("it works", () => {
  const tree = renderer.create(<LikeButton />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("background", "transparent");
});
