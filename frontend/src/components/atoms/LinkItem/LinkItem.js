import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper } from './LinkItem.style';

const LinkItem = ({ label, item }) => {
    return (
        <Wrapper>
            <Link
                to="#"
                onClick={(e) => {
                    window.location.href = item;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        </Wrapper>
    );
};
LinkItem.defaultProps = {
    item: '',
    label: '',
};
LinkItem.propTypes = {
    item: PropTypes.string,
    label: PropTypes.string,
};
export default LinkItem;
