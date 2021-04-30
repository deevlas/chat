import React from 'react';
import './home.scss';

import {EllipsisOutlined, FormOutlined, TeamOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';

import {Dialogs, Message, Status} from "Components";
import {ChatInput, IconReaded} from "../../Components";


const {Search} = Input;

const onSearch = value => console.log(value);


const Home = () => {

    return (
        <section className='home'>

            <div className="chat">
                <div className="chat__sidebar">

                    <div className="chat__sidebar-header">
                        <div>
                           <TeamOutlined style={{ fontSize: '15px' }}/>
                            <span>Список диалогов</span>
                        </div>
                        <Button type="link" icon={<FormOutlined/>} />
                    </div>

                    <div className="chat__sidebar-search">
                        <Search placeholder="Поиск среди контактов"
                                onSearch={onSearch}
                                size="large"
                                style={{ backgroundColor: '#3674ff' }}
                                enterButton
                        />
                    </div>

                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            userId={0}
                            items={[

                                {
                                    "_id": "160819f091656289ab212d33f",
                                    "text": "Velit officia fugiat anim ullamco sit cillum sunt incididunt do aliqua. Nisi deserunt laborum incididunt laboris excepteur eu ut dolore laborum mollit nulla aliquip. Do sint ea sunt qui nulla laboris fugiat ea dolore qui non eu tempor sint.",
                                    "created_at": "Tue Dec 30 2008 11:22:59 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "460819f095374256451de8e5f",
                                        "fullname": "Hammond Mccall",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "dce52526fcb39cd71fa7cd202e29063f",
                                    "text": "Nulla exercitation id duis sunt voluptate excepteur magna laborum Lorem nulla. Eu duis in ipsum occaecat pariatur cupidatat non velit et tempor. Ut magna quis ea reprehenderit aliqua culpa adipisicing consectetur nulla proident laborum sit consequat quis.",
                                    "created_at": "Wed Apr 20 2016 03:37:55 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "dce52526fcb39cd71fa7cd202e29063f",
                                        "fullname": "Barnett Justice",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "749ae09f18601c099932b3d018a5fca6",
                                    "text": "Quis nulla enim dolore occaecat officia. Duis exercitation et cupidatat nulla tempor velit qui voluptate. Sunt anim et voluptate minim exercitation fugiat id irure proident enim culpa.",
                                    "created_at": "Fri Mar 25 1977 06:07:50 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "749ae09f18601c099932b3d018a5fca6",
                                        "fullname": "Gilliam Bender",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "8fede8dc7462828c9fb79195676bcb4e",
                                    "text": "Consectetur commodo laborum ullamco Lorem sint irure consectetur labore. Quis velit velit in qui laboris esse minim duis consectetur. Ut commodo Lorem est id dolore.",
                                    "created_at": "Thu Jan 01 2015 13:33:55 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "8fede8dc7462828c9fb79195676bcb4e",
                                        "fullname": "Avis Jennings",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "f7aafc033755d074a6cf8f378ff36b8b",
                                    "text": "Laboris labore reprehenderit nisi consequat consequat do. Sint sunt non nulla voluptate ad. Anim cillum proident commodo sunt sit excepteur ipsum cupidatat aliqua in.",
                                    "created_at": "Wed Aug 25 1971 21:21:31 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "f7aafc033755d074a6cf8f378ff36b8b",
                                        "fullname": "Lucia Keller",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "93dfcaf3d923ec47edb8580667473987",
                                    "text": "Est eu ipsum nostrud deserunt excepteur. Commodo nisi commodo veniam culpa duis exercitation proident. Id id consectetur laborum et do tempor Lorem enim amet velit ut consequat.",
                                    "created_at": "Fri Dec 17 2010 07:51:33 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "93dfcaf3d923ec47edb8580667473987",
                                        "fullname": "Katherine Perry",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "a3dcb4d229de6fde0db5686dee47145d",
                                    "text": "Duis aute incididunt ullamco enim eiusmod nostrud sint irure duis laborum. Dolor sunt excepteur duis veniam eiusmod in et. Esse dolor pariatur eiusmod duis proident culpa non elit nostrud esse tempor in reprehenderit.",
                                    "created_at": "Tue Sep 25 2018 07:41:58 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "a3dcb4d229de6fde0db5686dee47145d",
                                        "fullname": "Jacquelyn Hahn",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "7815696ecbf1c96e6894b779456d330e",
                                    "text": "Nisi ullamco do eu sint proident eu magna velit. Tempor esse dolore anim mollit ex et voluptate consequat adipisicing aliqua exercitation do dolore pariatur. Elit ut veniam adipisicing ex laboris nostrud ea.",
                                    "created_at": "Tue Nov 15 2011 10:55:54 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "7815696ecbf1c96e6894b779456d330e",
                                        "fullname": "Morgan Avila",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "1c16ec653db27425bdf170bc110e381e",
                                    "text": "Nulla sunt do mollit velit. Enim incididunt ad sunt velit nulla. Id velit minim ea deserunt adipisicing cupidatat minim elit mollit veniam.",
                                    "created_at": "Thu Nov 01 1973 11:13:39 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "1c16ec653db27425bdf170bc110e381e",
                                        "fullname": "Barbara Bonner",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "c8a4d594ec75952d3c39c8d52a07e7ec",
                                    "text": "Velit magna excepteur officia non eu consectetur nisi commodo. Aliqua ex irure ex nisi velit tempor pariatur. Occaecat veniam culpa do Lorem qui id fugiat et.",
                                    "created_at": "Wed Mar 14 1973 17:24:34 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "c8a4d594ec75952d3c39c8d52a07e7ec",
                                        "fullname": "Gina Battle",
                                        "avatar": null
                                    }
                                }
                            ]}/>
                    </div>

                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div/>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Михаил Николаевич Перец</b>
                            <div className="chat__dialog-header-status">
                                <Status online/>
                            </div>
                        </div>
                        <Button type="link" icon={<EllipsisOutlined/>}/>
                    </div>
                    <div className="chat__dialog-messages">

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
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
