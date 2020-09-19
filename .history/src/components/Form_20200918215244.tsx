import styled, { css } from "styled-components";

export const Field = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: ${theme.spacing.s}px;

    ${Input} {
      width: 100%;
    }
  `}
`;

export const FieldRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding-bottom: ${theme.spacing.xxl1}px;
    ${Field} {
      width: 100%;
      padding: 0 ${theme.spacing.s}px;
    }
  `}
`;

export const Label = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.spacing.m}px;
    color: ${theme.colors.gray.dark};
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-bottom: ${theme.spacing.s}px;
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
    transition: 0.1s;

    &:focus {
      border-color: ${theme.colors.background.dark};
    }
  `}
`;
