import React from 'react';
import {Button as BaseButton} from 'antd';
import './Button.scss';
import propTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
    return (
        <BaseButton {...props} className={classNames('button', props.className, {
            "button--large": props.size === "large"
        })}  />
    );
};

Button.propTypes = {
    className: propTypes.string
}

export default Button;
