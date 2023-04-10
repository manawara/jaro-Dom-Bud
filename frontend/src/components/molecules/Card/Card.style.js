import styled from 'styled-components';
import { HeadingQuaternary } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { ButtonInline } from '../../atoms/Button/Button';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 380px;
    ${({ theme }) => theme.mq.desktop} {
        min-height: ${({ isNext }) => (isNext ? '430px' : '380px')};
    }
    background: ${({ url, theme }) => (url ? `url(http://localhost:1337${url})` : theme.colors.black)};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    top: 0;
    left: 0;
    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        background-color: ${({ theme }) => theme.colors.black};
        opacity: 0.4;
    }
`;

export const StyledHeadingQuaternary = styled(HeadingQuaternary)`
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    padding: 0 4px;
    z-index: 1;
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledParagraph = styled(Paragraph)`
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledButtonInline = styled(ButtonInline)`
    margin-top: auto;
    padding-bottom: 20px;
`;
