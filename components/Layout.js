import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #fffefc;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 70rem;
    max-width: 100%;
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: calc(1rem + 32 * (100vw / 1000));
  }
  h2 {
    font-size: calc(1rem + 24 * (100vw / 1000));
  }
  h3 {
    font-size: calc(1rem + 16 * (100vw / 1000));
  }
  h4 {
    font-size: calc(1rem + 8 * (100vw / 1000));
  }
  h5 {
    font-size: calc(1rem + 4 * (100vw / 1000));
  }
  p {
    font-size: calc(0.9rem + 4 * (100vw / 1000));
    font-weight: 300;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: calc(1rem + 4 * (100vw / 1000));
    cursor: pointer;

    &:hover {
      color: var(--grey3);
    }
  }

  hr {
    border: none;
    background-color: var(--grey8);
    height: 1px;
    margin: 2rem 0;
  }
`;

export default props => {
  return (
    <Layout className="page-layout">
      {props.children}
      <style jsx global>{`
        :root {
          --grey1: hsl(0, 0%, 13%);
          --grey2: hsl(0, 0%, 23%);
          --grey3: hsl(0, 0%, 32%);
          --grey4: hsl(0, 0%, 38%);
          --grey5: hsl(0, 0%, 49%);
          --grey6: hsl(0, 0%, 62%);
          --grey7: hsl(0, 0%, 69%);
          --grey8: hsl(0, 0%, 81%);
          --grey9: hsl(0, 0%, 88%);
          --grey10: hsl(0, 0%, 97%);
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        ul[class],
        ol[class] {
          padding: 0;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        p,
        ul[class],
        ol[class],
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        body {
          min-height: 100vh;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
        }

        ul[class],
        ol[class] {
          list-style: none;
        }

        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        img {
          max-width: 100%;
          display: block;
        }

        article > * + * {
          margin-top: 1em;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        .popover {
          box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
          border-radius: 5px;
        }
        .popover > * {
          font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          background: white;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
};
