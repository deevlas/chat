import React from 'react';
import './home.scss';

import {EllipsisOutlined, FormOutlined, TeamOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import {ChatInput, Messages, Status} from "Components";
import { Dialogs } from "Containers";
import DialogsJSON from 'dialogs.json';


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


                    {/*block chat__dialog-search*/}



                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            userId={0}
                            items={DialogsJSON}
                        />
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
                        {/*block messages*/}
                        <Messages />
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
