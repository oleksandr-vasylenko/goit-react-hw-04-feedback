import { GlobalStyle } from '../../GlobalStyle';
import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Card } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNetural] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNetural(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        throw new Error('Unexpected Value');
    }
  };

  const options = ['good', 'neutral', 'bad'];
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveStats = () =>
    Math.round((good / (good + neutral + bad)) * 100);

  return (
    <Card>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {good + neutral + bad === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveStats()}
          ></Statistics>
        )}
      </Section>
      <GlobalStyle />
    </Card>
  );
}
