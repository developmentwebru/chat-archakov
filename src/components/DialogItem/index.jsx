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



const DialogItem= ({    _id,

                       unreaded,
                       created_at,
                       text,
                       isMe,
                       currentDialogId,
                        onSelect,
                       lastMessage
})=> {
    return (
        <div className={classNames('dialogs__item', {
            'dialogs__item--online': lastMessage.user.isOnline,
            'dialogs__item--selected': currentDialogId === _id
        })}
             onClick={onSelect.bind(this, _id)}
        >

            <div className="dialogs__item-avatar">
                <Avatar user={lastMessage.user}/>


            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{lastMessage.user.fullname}</b>
                    <span>
                       {getMessageTime(lastMessage.created_at)}

                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage.text}</p>
                    {isMe && <IconReaded isMe={false} isReaded={true}/>}
                    {lastMessage.unreaded>0 &&
                    <div className="dialogs__item-info-bottom-count">
                        {lastMessage.unreaded > 9 ? '+9' :lastMessage.unreaded }</div>}
                </div>
            </div>
        </div>

    )
}



export default DialogItem;