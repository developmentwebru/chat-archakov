import React, { useEffect, useRef } from "react";
import {connect} from 'react-redux'
import { Messages as BaseMessages } from "../components";
import {messagesActions} from "../redux/actions";



const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
    const messagesRef = useRef(null);

    useEffect(() =>{
        if (currentDialogId){
        fetchMessages(currentDialogId)}
    }, [currentDialogId]);

    useEffect(() =>{

            messagesRef.current.scrollTo(0, 999999);


    });

    return (
        <BaseMessages
            blockref={messagesRef}
            items={items}
            isLoading={isLoading}
        />
    );
}

export default connect(
    ({ dialogs, messages}) => ({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading
    }),
    messagesActions
)(Dialogs);
