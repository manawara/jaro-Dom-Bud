import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    ${({ theme }) => theme.mq.desktop} {
        justify-items: flex-start;
    }
`;
