import styled from 'styled-components';

export const Wrapper = styled.section`
    position: fixed;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 38px 0;
    z-index: 3;
    .hamburger-react {
        margin-left: auto;
        ${({ theme }) => theme.mq.desktop} {
            display: none;
        }
    }
`;
