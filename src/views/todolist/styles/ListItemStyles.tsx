import styled, {css} from "styled-components";

export const ListItemDIV = styled.div`
    display: flex;
    align-items: flex-start;
    background: var(--gray-400);
    gap: 0.75rem;
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1rem;

    :not(:first-child) {
        margin-top: 0.75rem;
    }
`;

const ListItemToggleCommonStyles = `grid-area: toggle;
                                    width: 22px;
                                    height: 22px;
                                    cursor: pointer;
                                    border-radius: 999px;`

export const ListItemToggle = styled.button<{ $isDone: boolean }>`
  ${(props) => {
    if (props.$isDone) {
      return css`
        ${ListItemToggleCommonStyles};
        border: 2px solid var(--blue-400);
        background: none;
      `
    } else {
      return css`
        ${ListItemToggleCommonStyles};
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gray-100);
        border: 3px solid var(--purple-700);
        background: var(--purple-700);`
    }}}`;

const TodoContentCommonStyles = `grid-area: text;
                                 width: 90%;
                                 text-align: justify;
                                 color: var(--gray-100);`

export const TodoContent = styled.p<{ $isDone: boolean }>`
  ${(props) => {
    if (props.$isDone) {
      return css`
        ${TodoContentCommonStyles};
        text-decoration-line: line-through;
        color: var(--gray-300);
      `
    } else {
      return css`
        ${TodoContentCommonStyles};`
    }}}`;
export const ListItemDeleteButton = styled.button`
  grid-area: delete;
  display: flex;
  background-color: transparent;
  border: 0;
  color: var(--gray-300);
  cursor: pointer;
  transition: color 0.2s;
  :hover {
    color: var(--red-500);
  }
`
