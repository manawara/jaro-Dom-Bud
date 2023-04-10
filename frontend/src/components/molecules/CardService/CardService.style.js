import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 15px;
`;
