// import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { useState, useEffect } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Title } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        throw new Error('Invalid feedback type');
    }
  };

  useEffect(() => {
    setCountTotalFeedback(() => good + neutral + bad);
    setPositivePercentage(() => Math.round((good / countTotalFeedback) * 100));
  }, [good, neutral, bad, countTotalFeedback]);

  return (
    <div className="FeedbackWidget">
      <Title>Feedback Form</Title>

      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
