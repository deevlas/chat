import React from 'react';
import propTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ru} from 'date-fns/locale';

const Time = ({date}) => {
    return (
        <div>
            {formatDistanceToNow(new Date(date), {addSuffix: true, locale: ru})}
        </div>
);
};

Time.propTypes = {
    date: propTypes.string
}

export default Time;
