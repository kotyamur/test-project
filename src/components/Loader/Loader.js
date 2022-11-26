import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/BeatLoader';

export const Loader = ({ isLoading }) => {
  return (
    <BeatLoader
      color="#2196f3"
      loading={isLoading}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
      cssOverride={{ margin: 'auto', marginLeft: '60px' }}
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};
