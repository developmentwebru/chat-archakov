import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Button } from 'antd';
import "./ChatInput.scss";
import {CheckCircleOutlined, AudioOutlined, CameraOutlined, SmileOutlined} from "@ant-design/icons";


const ChatInput = props => {
    const [value, setValue] = useState("");

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="dashed" shape="circle" icon={<SmileOutlined />} />

            </div>
            <Input
                onChange={e => setValue(e.target.value)}
                size="large"
                placeholder="Введите текст сообщения…"
            />
            <div className="chat-input__actions">
                <Button type="dashed" shape="circle" icon={<CameraOutlined />} />

                {value ? (
                        <Button type="dashed" shape="circle" icon={<CheckCircleOutlined />} />

                ) : (
                    <Button type="dashed" shape="circle" icon={<AudioOutlined />} />
                )}
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;