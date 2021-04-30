import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './Status.scss'

const Status = ({ online }) => (
    <span className={classNames("status", {"status--online": online })}>
        {online ? 'онлайн' : 'офлайн'}</span>
)

Status.propTypes = {
    online: propTypes.bool
}

export default Status;
