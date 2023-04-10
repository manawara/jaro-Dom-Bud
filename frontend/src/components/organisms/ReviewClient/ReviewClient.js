import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import 'swiper/swiper-bundle.min.css';
import { HeadingSecondary, HeadingTertiary } from '../../atoms/Heading/Heading';
import { Wrapper } from './ReviewClient.style';
import Card from '../../molecules/Card/Card';
import useFetch from '../../../hooks/useFetch';

const ReviewClient = (props) => {
    const { data, loading, error } = useFetch('http://localhost:1337/api/our-offers?populate=*');

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    return (
        <Wrapper>
            <HeadingSecondary>Nasza firma wykonuje</HeadingSecondary>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                autoplay
                scrollbar={{ draggable: true }}
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data.data.map(({ attributes: { title, description, image } }) => (
                    <SwiperSlide key={image.data[0].id}>
                        {({ isNext }) => (
                            <Card
                                url={image.data[0].attributes.url}
                                title={title}
                                description={description}
                                isNext={isNext}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default ReviewClient;
