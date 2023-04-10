import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-top: 10px;
    padding: 50px 38px;
    background-color: ${({ theme }) => theme.colors.black};
    text-align: center;
    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 300px;
    }
`;

export const StyledContentGallery = styled.div`
    display: block;
    max-width: 1440px;
    margin: 0 auto;
`;
