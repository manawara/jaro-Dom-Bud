import styled from 'styled-components';

export const Wrapper = styled.nav`
    position: fixed;
    top: 124px;
    left: 0;
    bottom: 100%;
    max-width: 400px;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.mq.desktop} {
        display: none;
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;
export const ListItem = styled.li`
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: capitalize;
    margin-bottom: 30px;
`;
