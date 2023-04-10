import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: none;
    ${({ theme }) => theme.mq.desktop} {
        margin-left: auto;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`;
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0;
`;
export const ListItem = styled.li`
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight:   font-size: ${({ theme }) => theme.fontWeight.regular};
    text-transform: capitalize;
    list-style: none;
    &:not(:last-child) {
        margin-right: 32px;
    }
`;
