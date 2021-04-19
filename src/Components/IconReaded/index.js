import React from 'react';
import propTypes from 'prop-types';
import checkedSvg from "../../Assets/img/readed.svg";
import noCheckedSvg from "../../Assets/img/noreaded.svg";

const IconReaded = ({isMe, isReaded}) =>
    (isMe &&
        (isReaded ? (
            <img className="message__icon-readed" src={checkedSvg} alt="Readed icon" />
        ) : (
            <img
                className="message__icon-readed message__icon-readed--no"
                src={noCheckedSvg}
                alt="No readed icon"
            />
        )))

IconReaded.propTypes = {
    isMe: propTypes.bool,
    isReaded: propTypes.bool
}

export default IconReaded;
