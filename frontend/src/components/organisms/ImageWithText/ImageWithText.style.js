import styled from 'styled-components';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

export const Wrapper = styled.section`
    padding: 104px 0 100px;
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
`;
export const ContentImage = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    ${Paragraph} {
        text-align: left;
    }

    &:first-child {
        width: 100%;
        ${({ theme }) => theme.mq.tablet} {
            padding-right: 40px;
        }

        ${({ theme }) => theme.mq.desktop} {
            max-width: 460px;
            padding-right: 0;
        }
    }
`;

export const Image = styled.img`
    max-width: 100%;
    ${({ theme }) => theme.mq.desktop} {
        max-width: 560px;
    }
`;
