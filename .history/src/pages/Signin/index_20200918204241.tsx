import React from "react";
import styled, { css } from "styled-components";
import Grid, { MainContainer } from "../../components/Grid";

const SignIn = () => {
  return (
    <MainContainer>
      <Grid center fullH>
        <Field>
          <Label>Username</Label>
          <Input type="text" />
        </Field>
      </Grid>
    </MainContainer>
  );
};

export const Field = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: ${theme.spacing.s}px;
  `}
`;

export const Label = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.spacing.m}px;
    color: ${theme.colors.gray.dark};
    text-transform: uppercase;
    letter-spacing: ${theme.spacing.s};
    font-weight: bold;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.spacing.l}px;
    padding: ${theme.spacing.m}px;
    background-color: ${theme.colors.background.light};
    border: 2px solid;
    border-color: ${theme.colors.background.light};
    outline: 0;

    &:focus {
      border-color: ${theme.colors.background.dark};
    }
  `}
`;

export default SignIn;
