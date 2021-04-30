import React from 'react';
import propTypes from 'prop-types';
import {Empty} from "antd";

import { Message } from "../";




const Messages = ({items}) => {
    return (
        items ?
            <div>
                <Message
                    avatar='https://shutniki.club/wp-content/uploads/2019/12/e9f07e0a2367b166c2386384757a6b14.png'
                    date='Fri Mar 12 2021 18:39:00'
                    audio={'https://orangefreesounds.com/wp-content/uploads/2021/03/Ding-notification-melody.mp3?_=1'}

                />
                <Message
                    avatar='https://shutniki.club/wp-content/uploads/2019/12/e9f07e0a2367b166c2386384757a6b14.png'
                    text="Hello World!"
                    date='Fri Mar 12 2021 18:39:00'
                    isMe={true}
                    isReaded={false}/>

                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                         attachments={[
                             {
                                 filename: 'image.jpg',
                                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
                             },
                             {
                                 filename: 'image.jpg',
                                 url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
                             },
                             {
                                 filename: 'image.jpg',
                                 url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
                             }

                         ]}
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         attachments={[
                             {
                                 filename: 'image.jpg',
                                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
                             }
                         ]}/>

                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
                <Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'
                         text="Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint."
                         date='Fri Mar 12 2021 18:36:00'
                />
            </div>
            : <Empty description="Откройте диалог"/>
    )
}


Messages.propTypes = {
    items: propTypes.array
}

export default Messages;
