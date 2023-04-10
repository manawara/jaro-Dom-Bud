import styled from 'styled-components';

export const HeadingPrimary = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xll};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.2;
`;

export const HeadingSecondary = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xll};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.2;
    color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.black)};
`;

export const HeadingTertiary = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.2;
    color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.black)};
`;

export const HeadingQuaternary = styled.h4`
    font-size: ${({ theme, isActve }) => (isActve ? theme.fontSize.l : theme.fontSize.m)};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
`;
