import React from 'react';
import './Sidebar.scss'
import {FormOutlined, TeamOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {Dialogs} from "../../containers";


const Sidebar = ({user}) => {
    return (


        <div className="chat__sidebar">

            <div className="chat__sidebar-header">
                <div>
                    <TeamOutlined/>
                    <span>Список диалогов</span>
                </div>
                <Button type="dashed" shape="circle" icon={<FormOutlined/>}/>
            </div>


           <div className="chat__sidebar-dialogs">
                <Dialogs userId={user &&user._id}/>
            </div>
        </div>

    );
}


export default Sidebar;