import React, { useState } from 'react'
import './App.css'
import Statistics from './components/Statistics'
import FeedbackOptions from './components/FeedbackOptions'
import Section from './components/Section'
import Notification from './components/Notification'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = ({ target }) => {
    switch (target.value) {
      case 'good':
        setGood(x => x + 1)
        break

      case 'neutral':
        setNeutral(x => x + 1)
        break

      case 'bad':
        setBad(x => x + 1)
        break

      default:
        return
    }
  }

  const countTotalFeedback = () => {
    return good + bad + neutral
  }

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() ? Math.round((good / countTotalFeedback()) * 100) : 0
  }

  const options = ['good', 'neutral', 'bad']

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  )
}

export default App
