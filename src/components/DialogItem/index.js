import React from 'react';
import './DialogItem.scss'

import format from 'date-fns/format';


import { isToday } from 'date-fns'
import classNames from 'classnames'
import {Avatar, IconReaded} from "../";


const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm");
    } else {
        // make avatar
        return format(created_at, "DD.MM.YYYY");
    }
};



const DialogItem= ({
                       user,
                       unreaded,
                       created_at,
                       text,
                       isMe
})=> {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>

            <div className="dialogs__item-avatar">
                <Avatar user={user}/>


            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                       {getMessageTime(created_at)}

                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {isMe && <IconReaded isMe={false} isReaded={true}/>}
                    {unreaded>0 &&
                    <div className="dialogs__item-info-bottom-count">
                        {unreaded > 9 ? '+9' :unreaded }</div>}
                </div>
            </div>
        </div>

    )
}



export default DialogItem;