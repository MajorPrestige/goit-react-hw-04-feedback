import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, goodIncrement] = useState(0);
  const [neutral, neutralIncrement] = useState(0);
  const [bad, badIncrement] = useState(0);

  const handleIncrement = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        goodIncrement(p => p + 1);
        break;
    }
    switch (name) {
      case 'neutral':
        neutralIncrement(p => p + 1);
        break;
    }
    switch (name) {
      case 'bad':
        badIncrement(p => p + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedback = Math.floor((good / countTotalFeedback()) * 100);
    return feedback ? feedback : 0;
  };

  return (
    <div>
      <main>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>

        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalfeedback={countTotalFeedback()}
              feedbackPercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </main>
    </div>
  );
};
