import styled from 'styled-components';

export const ListItem = styled.ul`
    display: flex;
    flex-direction: column;

    padding: 0;

    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;
export const Label = styled.div`
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-transform: uppercase;
`;
