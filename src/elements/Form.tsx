import styled, { css } from "styled-components";

export const Field = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: ${theme.boxModel.s}px;

    ${Input} {
      width: 100%;
    }
  `}
`;

export const FieldRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding-bottom: ${theme.boxModel.xl};
    ${Field} {
      width: 100%;
      padding: 0 ${theme.boxModel.s}px;
    }
  `}
`;

export const Label = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.boxModel.m}px;
    color: ${theme.colors.gray};
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-bottom: ${theme.boxModel.s}px;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.boxModel.l}px;
    padding: ${theme.boxModel.m}px;
    background-color: ${theme.colors.background};
    border: 2px solid;
    border-color: ${theme.colors.background};
    outline: 0;
    transition: 0.1s;
    border-radius: 8px;

    &:focus {
      border-color: ${theme.colors.background};
    }
  `}
`;
