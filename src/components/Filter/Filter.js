import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilteredName } from 'redux/selectors';
import { Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilteredName);

  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChangeFilter} />
    </Label>
  );
};
