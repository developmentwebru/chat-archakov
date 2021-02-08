import React from 'react';
import PropTypes from 'prop-types';

import './FormField.scss'

import {Form, Input} from "antd";
import {validateField} from "../../utils/helpers";



const FormField = ({touched, errors, values, name, placeholder, handleChange, handleBlur, icon, type})=> {
    return (
        <Form.Item
            style={{height: "60px", marginBottom: "20px"}}
            help={!touched[name] ? "" : errors[name]}
            hasFeedback
            validateStatus={validateField(name, touched, errors)}
        >
            <Input
                id={name}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                /* type="email"*/
                size='large'
                prefix={icon}
                placeholder={placeholder}
                type={type}
            />
        </Form.Item>
    )
}




FormField.propTypes = {
    className: PropTypes.string
}

export default FormField;