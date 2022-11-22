import styled from "styled-components";

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
export const ListItemToggle = styled.button`
    grid-area: toggle;
    width: 22px;
    height: 22px;
    cursor: pointer;
    border-radius: 999px;
`;
export const TodoContent = styled.p`
  grid-area: toggle;
  width: 22px;
  height: 22px;
  cursor: pointer;
  border-radius: 999px;
`
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
