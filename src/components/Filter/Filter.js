// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredName } from 'redux/selectors';
import { Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilteredName);
  const handleChangeFilter = e => {
    // setFilter(e.currentTarget.value);
    console.log('change filter');
  };
  return (
    <Label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChangeFilter} />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
