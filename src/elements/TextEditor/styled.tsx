import styled, { css } from "styled-components";
import Card from "../Card";

export const EditorContainer = styled(Card)`
  ${({ theme }) => css`
    .public-DraftEditor-content {
      padding: ${theme.boxModel.xl};
      min-height: 150px;

      span[style*="font-family: monospace;"] {
        background-color: ${theme.colors.base};
        padding: 3px 4px;
        border-radius: 4px;
      }
    }

    .public-DraftEditorPlaceholder-root {
      padding: ${theme.boxModel.xl};
      position: absolute;
      pointer-events: none;
      opacity: 0.4;
    }

    blockquote {
      padding-left: ${theme.boxModel.m};
      border-left: 4px solid ${theme.colors.primary};
    }
  `}
`;
