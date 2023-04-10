import React, { useRef, useState } from 'react';
import { Lightbox } from 'react-modal-image';
// Import Swiper React components
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Wrapper, StyledContentGallery } from './Gallery.style';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import 'swiper/swiper-bundle.min.css';
import { HeadingSecondary, HeadingTertiary } from '../../atoms/Heading/Heading';
import useFetch from '../../../hooks/useFetch';

const Gallery = () => {
    const { data, loading, error } = useFetch('http://localhost:1337/api/our-offers?populate=*');
    const [imageContent, setImage] = useState({});
    const [isOpen, setOpen] = useState(false);
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleOpenPopup = (image, alt) => {
        setOpen(true);
        setImage({ small: image, alt: alt });
    };
    const handleClosePopup = () => {
        setOpen(false);
    };

    return (
        <Wrapper>
            <HeadingSecondary isWhite>Galeria zdjęć</HeadingSecondary>
            <StyledContentGallery>
                <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {data.data.map(({ attributes: { image } }) => (
                        <SwiperSlide
                            key={image.data[0].id}
                            onClick={() =>
                                handleOpenPopup(
                                    `http://localhost:1337${image.data[0].attributes.url}`,
                                    image.data[0].attributes.alternativeText,
                                )
                            }
                        >
                            <img src={`http://localhost:1337${image.data[0].attributes.url}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledContentGallery>

            {isOpen && (
                <Lightbox
                    medium={imageContent.small}
                    large={imageContent.small}
                    alt={imageContent.alt}
                    onClose={handleClosePopup}
                />
            )}
        </Wrapper>
    );
};

export default Gallery;
