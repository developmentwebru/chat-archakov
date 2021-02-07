import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import { Dialogs as BaseDialogs } from "../components";
import {dialogsActions} from "../redux/actions";

const Dialogs = ({fetchDialogs, setCurrentDialogId, currentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(items));

    const onChangeInput = value => {
        setFiltredItems(
            items.filter(
                dialog =>
                    dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
            )
        );
        setValue(value);
    };

    const onSelectDialog = () => {

    };

   /* useEffect(() =>{
    if (!items.length) {
        fetchDialogs();
    }else {
        setFiltredItems(items);
    }

    }, [items]);*/

    return (
        <BaseDialogs
            userId={userId}
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    );
};

export default connect(({ dialogs}) => dialogs, dialogsActions)(Dialogs);
