import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Notification/Notification.module.css'

const Notification = ({ message }) => <p className={styles.message}>{message} </p>

Notification.defaultProps = {
  message: '',
}

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification
