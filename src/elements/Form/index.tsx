import styled, { css } from "styled-components";
import { setColor } from "../Theme";

export const Field = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: ${theme.boxModel.s};
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
      padding: 0 ${theme.boxModel.s};
    }
  `}
`;

export const Label = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.boxModel.m};
    color: ${theme.colors.gray};
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-bottom: ${theme.boxModel.s};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.boxModel.xl};
    padding: ${theme.boxModel.l};
    background-color: ${theme.colors.base};
    border: 1px solid;
    border-color: ${theme.colors.base};
    outline: 0;
    transition: 0.1s;
    border-radius: 8px;

    &::placeholder {
      color: ${setColor(theme.colors.base).darken[5]};
    }

    &:hover {
      border-color: ${setColor(theme.colors.base).darken[1]};
    }

    &:focus {
      border-color: ${setColor(theme.colors.base).darken[2]};
    }
  `}
`;
