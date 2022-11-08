import styled from "styled-components";

export const listItem = styled.div`
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
`
export const  listItemToggle = styled.button`
  grid-area: toggle;
  width: 22px;
  height: 22px;
  cursor: pointer;
  border-radius: 999px;
`

