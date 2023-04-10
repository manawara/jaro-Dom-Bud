import styled from 'styled-components';

export const ButtonInline = styled.span`
    font-size: ${({ theme }) => theme.fontSize.regular};
`;

export const Button = styled.span`
    font-size: ${({ theme }) => theme.fontSize.regular};
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    padding: 10px 44px;
    background-color: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.blackLight};
`;
