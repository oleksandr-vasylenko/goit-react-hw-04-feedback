import PropTypes from 'prop-types';
import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(item => {
        return (
          <li key={item}>
            <Button onClick={() => onLeaveFeedback(item)}>{item}</Button>
          </li>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
