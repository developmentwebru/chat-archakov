import React from 'react';
import {formatDistanceToNow } from 'date-fns'
import ruLocale from 'date-fns/locale/ru';
import PropTypes from 'prop-types';
import './Time.scss'


const Time = ({date}) =>
    formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale})

Time.propTypes = {
    date: PropTypes.instanceOf(Date)
}


export default Time;