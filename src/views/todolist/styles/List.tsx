import styled from 'styled-components'

export const list = styled.div`
  width: 100%;
  max-width: 736px;
  margin-top: -1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.3rem;
  padding: 1rem;
`

export const listHeader = styled.header`
  width: 100%;

  > form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`

export const listInputNewTask = styled.input`
  /* flex-grow: 1; */
  width: 100%;
  background: var(--gray-500);
  padding: 1rem;
  border-radius: 8px;
  color: var(--gray-100);
  border: 1px solid transparent;
  transition: border 0.2s;

  ::placeholder {
    color: var(--gray-300);
  }

  :focus {
    border: 1px solid var(--purple-700);
  }
`

export const listButtonNewTask = styled.button`
  /* flex-grow: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 0.5rem;
  background: var(--blue-700);
  border-radius: 8px;
  color: var(--gray-100);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.4;
  border: 0;
  transition: background 0.2s;

  :hover {
    background: var(--blue-400);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`



