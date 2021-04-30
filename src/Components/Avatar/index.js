import React from 'react';
import './Avatar.scss';
import propTypes from 'prop-types';
import {generateAvatarFromHash} from "Utils/Helpers";

const Avatar = ({user}) => {
    if (user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}/>
        )
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstChar = user.fullname[0].toUpperCase();
        return <div style={{background: `linear-gradient(135deg, ${color} 10%, ${colorLighten} 96.52%)`}}
                    className="avatar avatar--symbol">{firstChar} </div>}
};


Avatar.propTypes = {
    className: propTypes.string
}

export default Avatar;
