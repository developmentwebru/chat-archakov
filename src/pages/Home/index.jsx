import React from 'react';

import './Home.scss'
import { EllipsisOutlined} from '@ant-design/icons';
import { Messages, ChatInput, Status, Sidebar} from '../../containers'

import {Button} from "antd";

const Home = ()=> {

    return (
        <section className='home'>
            <div className='chat'>
             <Sidebar />
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                                <Status online/>
                              <Button type="dashed" shape="circle" icon={<EllipsisOutlined style={{ fontSize: '22px'}}/>} />

                    </div>
                    <div className="chat__dialog-messages">
                                <Messages />

                    </div>
                    <div className="chat__dialog-input">


                    <ChatInput />
                </div>
            </div>
        </div>
        </section>
    )
}



export default Home;