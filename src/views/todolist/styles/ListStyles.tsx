import styled from "styled-components";
import { blue, gray, purple } from "@/constant/colorConstant";

export const ListDIV = styled.div`
    width: 100%;
    max-width: 736px;
    margin-top: -1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.3rem;
    padding: 1rem;
`;

export const ListHeader = styled.header`
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
`;

export const ListInputNewTask = styled.input`
    /* flex-grow: 1; */
    width: 100%;
    background: ${gray.gray_500};
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    border: 1px solid transparent;
    transition: border 0.2s;

    ::placeholder {
        color: ${gray.gray_300};
    }

    :focus {
        border: 1px solid ${purple.purple_700};
    }
`;

export const ListButtonNewTask = styled.button`
    /* flex-grow: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 0.5rem;
    background: ${blue.blue_700};
    border-radius: 8px;
    color: ${gray.gray_100};
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.4;
    border: 0;
    transition: background 0.2s;

    :hover {
        background: ${blue.blue_400};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
