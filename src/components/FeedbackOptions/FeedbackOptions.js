import React from 'react'
import styles from '../FeedbackOptions/FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="wrap">
    {options.map(option => (
      <button className={styles.button} type="button" key={option} value={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
)

export default FeedbackOptions
