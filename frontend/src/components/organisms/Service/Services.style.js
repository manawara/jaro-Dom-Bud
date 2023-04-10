import styled from 'styled-components';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { ReactComponent as IconTeam } from '../../../assets/icons/team.svg';
import { ReactComponent as IconSecurity } from '../../../assets/icons/security.svg';
import { ReactComponent as IconPiechart } from '../../../assets/icons/piechart.svg';

export const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    padding: 50px 0;
`;

export const ContentService = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 40px;
    justify-items: center;
    ${({ theme }) => theme.mq.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }
`;

export const StyledParagraph = styled(Paragraph)`
    color: ${({ theme }) => theme.colors.gray};
`;

export const StyledIconTeam = styled(IconTeam)`
    path {
        fill: ${({ theme }) => theme.colors.black};
    }
`;
export const StyledIconPiechart = styled(IconPiechart)`
    path {
        fill: ${({ theme }) => theme.colors.black};
    }
`;
export const StyledIconSecurity = styled(IconSecurity)`
    path {
        fill: ${({ theme }) => theme.colors.black};
    }
`;
