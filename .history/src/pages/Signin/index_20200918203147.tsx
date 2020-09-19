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
    font-size: ${theme.spacing.m};
    padding: ${theme.spacing.m}px;
    background-color: ${theme.colors.background.light};
    border: 0;
  `}
`;

export default SignIn;
