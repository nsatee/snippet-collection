import React from "react";
import styled, { css } from "styled-components";
import Grid, { MainContainer } from "../../components/Grid";

const SignIn = () => {
  return (
    <MainContainer>
      <Grid center fullH>
        <Input type="text" />
      </Grid>
    </MainContainer>
  );
};

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacing.l}px;
  `}
`;

export default SignIn;
