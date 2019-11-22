import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../../elements/image";
import Lockup from "../lockup";
import Like from "./like-button";
import PropTypes from "prop-types";

const BeerCard = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 100%;
  flex-wrap: wrap;

  @media ${device.laptop} {
    width: 30%;
  }
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;
  position: relative;
  margin-top: auto;
  width: 100%;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

function Beercard(props) {
  return (
    <BeerCard>
      <Content>
        <Lockup text={props.description} tag="h3" title={props.title} />
      </Content>
      <ImagContainer>
        <Like />
        <Image url={props.image} />
      </ImagContainer>
    </BeerCard>
  );
}

Beercard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};

export default Beercard;
