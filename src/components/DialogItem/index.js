import React from 'react';
import './DialogItem.scss'

import classNames from 'classnames'
import {IconReaded, Time} from "../";

const getAvatar = avatar => {
    if (avatar) {
        return   <img src='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1' alt='фото аватарки'/>;
    } else{
        //make avatar
    }
}

const DialogItem= ({user, message, date, unreaded})=> {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
            <div className="dialogs__item-avatar">
                {getAvatar('https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1')}
           {/*     <img src={user.avatar} alt={`{user.fullname} avater`}/>*/}

            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Федор Достоевский</b>
                    <span>13:03 {/*<Time date={new Date()}/>*/}</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Мы все свидетельствуем, а не пытаемся победить</p>
                   <IconReaded isMe={false} isReaded={true} />
                    {unreaded>0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' :unreaded }</div>}
                </div>
            </div>
        </div>

    )
}



export default DialogItem;