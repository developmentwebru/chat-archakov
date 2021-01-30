import React  from "react";
import PropTypes from "prop-types";
import className from 'classnames';
import './Status.scss'

const Status = ({online} ) => (

            <span className={className('status', {"status--online" :online })}>{online ? 'онлайн' : 'офлайн'}</span>

);

Status.propTypes = {
    online: PropTypes.bool
};

export default Status;

