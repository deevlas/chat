import React from 'react';
import orderBy from 'lodash/orderBy'


import {DialogItem} from '../';

import './Dialogs.scss';
import {Input, Empty} from "antd";


const {Search} = Input;



const Dialogs = ({items, userId, onSearch, inputValue}) =>
    <div className="dialogs">
        <div className="dialogs__search">
            <Search placeholder="Поиск среди контактов"
                    size="large"
                    style={{ backgroundColor: '#3674ff' }}
                    enterButton
                    value={inputValue}
                    onChange={e => onSearch(e.target.value)}
            />
        </div>
        {items.length ? (
            orderBy(items, ["created_at"], ["desc"]).map(item => (
            <DialogItem key={item._id} isMe={item.user._id === userId}{...item}/>
        )) )  : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
            )}
    </div>
export default Dialogs;
