import React from 'react';
import { ReactComponent as IconFacebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as IconYoutube } from '../../../assets/icons/youtube.svg';
import { ReactComponent as IconTwitter } from '../../../assets/icons/twitter.svg';
import { Wrapper } from './SocialIcons.style';

const SocialIcons = () => {
    return (
        <Wrapper>
            <IconYoutube />
            <IconFacebook />
            <IconTwitter />
        </Wrapper>
    );
};

export default SocialIcons;
