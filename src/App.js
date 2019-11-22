import React, { Fragment } from "react";
import "./App.css";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./components/layout/section";
import Wrapper from "./components/layout/wrapper";
import MainWrapper from "./components/layout/mainwrapper";
import Grid from "./components/layout/grid";

function App() {
  return (
    <Fragment>
      <MainWrapper>
        <Header />
        <Section>
          <Hero />
        </Section>

        <Section>
          <Wrapper>
            <Grid />
          </Wrapper>
        </Section>

        <Footer />
      </MainWrapper>
    </Fragment>
  );
}

export default App;
