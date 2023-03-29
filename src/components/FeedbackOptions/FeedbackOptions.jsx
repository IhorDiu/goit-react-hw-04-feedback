import PropTypes from 'prop-types';
import { Button } from './FeedbackOptoins.styled';

const options = ['Good', 'Neutral', 'Bad'];

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
