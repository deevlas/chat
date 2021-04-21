import React from 'react';
import './home.scss';

import {Dialogs, Message} from "Components";



const Home = () => {

    return (
        <section className='home'>

            123

            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header"></div>
                </div>
                <div className="chat__dialog"></div>
            </div>

            {/*<Dialogs*/}
            {/*    userId={0}*/}
            {/*    items={[*/}
            {/*        {*/}
            {/*            _id: '7c22ea49c45735e162e83e1c35b89345',*/}
            {/*            text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',*/}
            {/*            isReaded: false,*/}
            {/*            created_at: new Date("Fri Apr 15 2021 15:13:33"),*/}
            {/*            user: {*/}
            {/*                _id: '7a9ae1b35805cdda8008343d0717d4fc',*/}
            {/*                fullname: 'Достоевский',*/}
            {/*                avatar: null,*/}
            {/*            },*/}
            {/*        },*/}
            {/*        {*/}
            {/*            _id: '098b5abeed7ae8d1fb4a027ef89115d8',*/}
            {/*            text: 'Hi! How are you? Today Im very busy...',*/}
            {/*            isReaded: false,*/}
            {/*            created_at: new Date("Fri Apr 16 2021 18:13:33"),*/}
            {/*            user: {*/}
            {/*                _id: '098b5abeed7ae8d1fb4a027ef89115d8',*/}
            {/*                fullname: 'Аль Пачино',*/}
            {/*                avatar: "http://i030.radikal.ru/0903/1f/5c0ecac30b1f.jpg",*/}
            {/*            },*/}
            {/*        }*/}
            {/*    ]}/>*/}

            {/*<Message avatar='https://shutniki.club/wp-content/uploads/2019/12/e9f07e0a2367b166c2386384757a6b14.png'*/}
            {/*         date='Fri Mar 12 2021 18:39:00'*/}
            {/*         audio={'https://orangefreesounds.com/wp-content/uploads/2021/03/Ding-notification-melody.mp3?_=1'}*/}
            {/*/>*/}
                {/*<Message avatar='https://shutniki.club/wp-content/uploads/2019/12/e9f07e0a2367b166c2386384757a6b14.png'*/}
                {/*         text="Hello World!"*/}
                {/*         date='Fri Mar 12 2021 18:39:00'*/}
                {/*         isMe={true}*/}
                {/*         isReaded={true}/>*/}

                {/*<Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'*/}
                {/*         text="Салам"*/}
                {/*         date='Fri Mar 12 2021 18:36:00'*/}
                {/*         attachments={[*/}
                {/*             {*/}
                {/*                 filename: 'image.jpg',*/}
                {/*                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water'*/}
                {/*             },*/}
                {/*             {*/}
                {/*                 filename: 'image.jpg',*/}
                {/*                 url: 'https://source.unsplash.com/100x100/?random=2&nature,water'*/}
                {/*             },*/}
                {/*             {*/}
                {/*                 filename: 'image.jpg',*/}
                {/*                 url: 'https://source.unsplash.com/100x100/?random=3&nature,water'*/}
                {/*             }*/}

                {/*         ]}*/}
                {/*/>*/}

                {/*/>*/}
                {/*<Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'*/}
                {/*         attachments={[*/}
                {/*             {*/}
                {/*                 filename: 'image.jpg',*/}
                {/*                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water'*/}
                {/*             }*/}
                {/*         ]}/>*/}

                {/*<Message avatar='https://expertua.parimatch.com/wp-content/uploads/2020/02/AVATAR.png'*/}
                {/*         isTyping/>*/}

        </section>
    );
};

export default Home;
