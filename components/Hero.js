import React from "react";
import styled, { keyframes } from "styled-components";

const Hero = styled.section`
  text-align: center;

  h1 {
    font-size: 1rem;
    font-weight: 900;
    margin: 3rem auto 2rem;
    max-width: 45rem;

    @media screen and (min-width: 20rem) {
      font-size: calc(1rem + 3 * ((100vw - 20rem) / 50));
    }

    @media screen and (min-width: 70rem) {
      font-size: 4rem;
    }
  }

  p {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 42rem;
  }
`;

const rotateGirl = keyframes`
  from {
    transform: rotate(-20deg);
  }

  to {
    transform: rotate(-16deg) translateY(-5px);
  }
`;

const rotateBoy = keyframes`
  from {
    transform: rotate(-10deg);
  }

  to {
    transform: rotate(-6deg) translateY(5px);
  }
`;

const Girl = styled.img`
  position: absolute;
  width: 20%;
  top: 25%;
  right: 28%;
  transform: rotate(-20deg);
  animation: ${rotateGirl} 2.5s 1s alternate infinite ease-in-out;
`;

const Boy = styled.img`
  position: absolute;
  width: 18%;
  top: 35%;
  left: 28%;
  transform: rotate(-10deg);
  animation: ${rotateBoy} 2.5s 1s alternate infinite ease-in-out;
`;

export default () => (
  <Hero>
    <div style={{ position: "relative" }}>
      <Girl src="/assets/girl.svg" />
      <Boy src="/assets/boy.svg" />
      <img src="/assets/background.png" />
    </div>
    <h1>Home of student developers.</h1>
    <p>
      Showcasing the best learning, tools and resources – handpicked for quality
      with exclusive offers and discounts for students.
    </p>
  </Hero>
);
