import React from 'react';
import { Dialogs, Message} from "../../components";
import './Home.scss'


const Home = ()=> {

    return (
        <section className='home'>
            <Dialogs
                userId={0}
                items={[

                     {
                       _id: "5dae041441991509fbdc96bdb34d2818",
                       text: 'Мы все свидетельствуем, а не пытаемся победить',
                       isReaded: false,
                       created_at: 'Wed Jan 28 2021 00:11:45',
                       user: {
                           _id: "5dae041441991509fbdc96bdb34d2818",
                            fullname: 'Федор Достоевский',
                            avatar: null
                            }
                             },
                    {
                        _id: "4c4580c965e6f137f2630d93dd7ecdde",
                        text: 'Мы все свидетельствуем, а не пытаемся победить',
                        isReaded: false,
                        created_at: 'Wed Jan 25 2021 00:10:45',
                        user: {
                            _id: "4c4580c965e6f137f2630d93dd7ecdde",
                            fullname: 'Алан Тьюринг',
                            avatar: 'https://sun2-9.userapi.com/impf/c631817/v631817500/39bcb/rAJR2vkSJHQ.jpg?size=50x0&quality=96&crop=77,45,293,293&sign=6fdfab9db970ee4cd77dea54f72f4c71&ava=1'
                        }
                    }

             ]}/>


            <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'

                     date='Mon Jan 25 2021 18:45:17'
                     audio='https://proxy.notificationsounds.com/funny/vuvuzela-power-down-126/download/file-de_vuvuzela-power-down.mp3'

            />



           {/* <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'
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
                        isTyping


            />
            <Message avatar='https://sun2-9.userapi.com/impf/c847018/v847018152/bc2fa/jl5qPMeshrM.jpg?size=50x0&quality=96&crop=1,319,1077,1077&sign=58aaeb3be909fe4bc28c18c0b5c6d1bd&ava=1'

                     attachments={
                         [{
                             filename: 'image.jpg0',
                             url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60'
                         } ]}

            />*/}
        </section>
    )
}



export default Home;