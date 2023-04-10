import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    min-width: 150px;
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
