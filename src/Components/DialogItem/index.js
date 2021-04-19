import React from 'react';
import classNames from 'classnames'

import {IconReaded} from '../';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import './DialogItem.scss';

const getMessageTime = created_at => {
    if(isToday(created_at)) {
        return format (new Date(created_at), "HH:mm"
        )
    } else {
       return format (new Date(created_at), "dd.MM.yyyy")
    }
}

const getAvatar = avatar => {
    if(avatar) {
        return (
        <img src="https://avatarko.ru/img/avatar/2/cherep_ogon_muzyka_naushniki_1665.jpg" alt={`avatar`}/>
        )
    } else {
        //make avatar
    }
}

const DialogItem = ({user, unreaded, isMe, text, created_at}) =>
    <div className={classNames('dialogs__item',
        {'dialogs__item--online': user.isOnline})}>
        <div className="dialogs__item-avatar">
            {getAvatar(user.avatar)}
            {/*<img src={user.avatar} alt={`${user.fullName} avatar`}/>*/}
        </div>
        <div className='dialogs__item-info'>
            <div className="dialogs__item-info-top">
                <b>{user.fullname}</b>
                <span>
                    {getMessageTime(created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{text}</p>
                {isMe && <IconReaded isMe={true} isReaded={true}/>}
                {unreaded > 0 && (
                    <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
                )}
            </div>
        </div>
    </div>
export default DialogItem;
