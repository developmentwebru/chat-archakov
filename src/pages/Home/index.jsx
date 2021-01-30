import React from 'react';
import {ChatInput, Status} from "../../components";
import './Home.scss'
import {TeamOutlined, FormOutlined, EllipsisOutlined} from '@ant-design/icons';
import {Dialogs} from '../../containers'
import dialogsJSON from "../../dialogs.json";
import Messages from "../../components/Messages";
import {Button} from "antd";
const Home = ()=> {

    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__sidebar">

                    <div className="chat__sidebar-header">
                        <div>
                        <TeamOutlined  />
                        <span>Список диалогов</span>
                        </div>
                        <Button type="dashed" shape="circle" icon={<FormOutlined />} />
                    </div>



                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={0} items={dialogsJSON} />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                       <div className="chat__dialog-header-center">
                           <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
                           <div className="chat__dialog-header-status">
                                <Status online/>
                           </div>
                       </div>
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