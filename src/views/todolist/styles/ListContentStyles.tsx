import styled from "styled-components";

export const ListContentDIV = styled.div`
    width: 100%;
    max-width: 736px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
    gap: 1.5rem;
`;

export const ListContentHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const listCreatedTaskCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.7;
    font-weight: bold;
    color: var(--blue-400);

    > span {
        width: 2rem;
        height: 1.3rem;
        padding: 2px 8px;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        background: var(--gray-400);
        color: var(--gray-200);
    }
`;

export const ListDoneTaskCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.7;
    font-weight: bold;
    color: var(--purple-400);

    > span {
        width: fit-content;
        height: 1.3rem;
        padding: 2px 8px;
        border-radius: 14px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        background: var(--gray-400);
        color: var(--gray-200);
    }
`;

export const EmptyListDIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray-300);
    font-size: 1rem;
    line-height: 1.4;
    text-align: center;

    > svg {
        margin-bottom: 1rem;
        color: var(--gray-400);
    }
`;

export const ListItemsContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
