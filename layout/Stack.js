import React from "react";
import styled from "styled-components";

const Stack = styled.div`
  --space: ${props => props.space || "1.5rem"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${props =>
    props.splitAfter &&
    `
      :only-child {
        height: 100%;
      }

      > :nth-child(${props.splitAfter}) {
        margin-bottom: auto;
      }
    `}

  ${props =>
    props.recursive
      ? `
        > * {
          margin-top: 0;
          margin-bottom: 0;
        }

        > * + * {
          margin-top: var(--space);
        }
      `
      : `
        * {
          margin-top: 0;
          margin-bottom: 0;
        }

        * + * {
          margin-top: var(--space);
        }
    `}
`;

export default props => {
  const { children, space, recursive, splitAfter } = props;

  return (
    <Stack space={space} recursive={recursive} splitAfter={splitAfter}>
      {children}
    </Stack>
  );
};
