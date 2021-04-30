import React, {useState, useRef, useEffect} from 'react';

import './Message.scss';

import propTypes from 'prop-types';
import classNames from 'classnames';

import {convertCurrentTime} from 'Utils/Helpers'

import waveSvg from 'Assets/img/wave.svg';
import playSvg from 'Assets/img/play.svg';
import pauseSvg from 'Assets/img/pause.svg';

import {Time, IconReaded} from 'Components';


const MessageAudio = ({audio}) => {

    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {

        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.5';
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = audioElem.current && audioElem.current.duration || 0
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, [])

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audio} preload="auto"/>
            <div className="message__audio-progress"
                 style={{width: progress + "%", height: '100%'}}/>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="pauseSvg"/>
                        ) : (
                            <img src={playSvg} alt="playSvg"/>
                        )}
                    </button>
                </div>
                <div className="message__audio-wave"><img src={waveSvg} alt="Wave"/></div>
                <div className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </div>
            </div>

        </div>
    )
}

const Message = ({
                     avatar,
                     user,
                     date,
                     audio,
                     text,
                     isMe,
                     isReaded,
                     attachments,
                     isTyping
                 }) => {

    return (
        <div className={classNames('message', {
            'message--isme': isMe,
            "message--is-typing": isTyping,
            "message--image": attachments && attachments.length === 1,
            "message--is-audio": audio
        })}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded}/>

                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullName}`}/>
                </div>

                <div className='message__info'>
                    <div>
                        {(audio || text || isTyping) && (
                            <div className="message__bubble">
                                {text && <p className="message__text">{text}</p>}

                                {isTyping && <div className="message__typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>}
                                {audio && <MessageAudio audio={audio}/>}
                            </div>
                        )}

                        {attachments && (
                            <div className='message__attachments'>
                                {attachments.map((item, index) => (

                                    <div key={index} className="message__attachments-item">
                                        <img src={item.url} alt={item.filename}/>
                                    </div>
                                ))}
                            </div>
                        )}

                        {date && <span className="message__date">
                        <Time date={date}/>
                    </span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: propTypes.string,
    date: propTypes.string,
    text: propTypes.string,
    user: propTypes.object,
    attachments: propTypes.array,
    isTyping: propTypes.bool,
    isMe: propTypes.bool,
    isReaded: propTypes.bool,
    audio: propTypes.string
}

export default Message;
