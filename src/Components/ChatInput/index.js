import React, {useState} from 'react';
import './ChatInput.scss';
import propTypes from 'prop-types';
import {Button, Input} from "antd";
import {AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined} from '@ant-design/icons';



const ChatInput = props => {

    const [value, setValue] = useState('')

    return (
        <div className="chat-input">
            <Button type="link" icon={<SmileOutlined className="chat-input__smile-btn"/>} />
            <Input
                onChange={e => setValue(e.target.value)}
                placeholder="Введите текст сообщения... "
                size="large"
            />
            <div className="chat-input__actions">
                <Button type="link" icon={<CameraOutlined />}/>
                {value ? <Button type="link" icon={<SendOutlined /> }/> : <Button type="link" icon={<AudioOutlined/> }/>}
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: propTypes.string
}

export default ChatInput;
