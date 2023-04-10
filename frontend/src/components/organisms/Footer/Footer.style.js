import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    background-color: ${({ theme }) => theme.colors.black};
`;
export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
