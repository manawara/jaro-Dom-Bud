import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
    width: 320px;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    padding: 12px 16px;
    color: ${({ theme }) => theme.colors.blackLight};
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.blackLight};
    }
`;

export const TextArea = styled.textarea`
    width: 320px;
    min-height: 200px;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    padding: 12px 16px;
    color: ${({ theme }) => theme.colors.blackLight};
    resize: none;
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.blackLight};
    }
`;
