import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../";

const Messages = ({ items }) => {
    return items ? (
        <div>
            <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'

                     date='Mon Jan 25 2021 18:45:17'
                     audio='https://proxy.notificationsounds.com/funny/vuvuzela-power-down-126/download/file-de_vuvuzela-power-down.mp3'
            />
            <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'
                     text='Саламаллейкум Бро'
                     date='Mon Jan 25 2021 18:45:17'

            />
            <Message avatar='https://sun2-10.userapi.com/impg/c854324/v854324523/1f9dba/gMwI-Giom3U.jpg?size=50x0&quality=96&crop=273,87,315,315&sign=3b98005abbc9ccdc97d0a1d32a8ee136&ava=1'
                     text='Саламчик, my friend'
                     date='Mon Jan 25 2021 18:55:17'
                     isMe={true}
                     isReaded={false}
                     attachments={[
                         {
                             filename: 'image.jpg0',
                             url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60'
                         },
                         {
                             filename: 'image.jpg0',
                             url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60'
                         },
                         {
                             filename: 'image.jpg0',
                             url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60'
                         }
                     ]}
            />
            <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'



            />
            <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'

                     attachments={
                         [{
                             filename: 'image.jpg0',
                             url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60'
                         } ]}

            />
        </div>
    ) : (
        <Empty description="Откройте диалог" />
    );
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;