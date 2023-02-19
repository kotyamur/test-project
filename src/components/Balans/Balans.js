import { BalansInput, Container} from './Balans.styled';
import { useDispatch } from 'react-redux';
import { getBalance, updateBalance } from '../../redux/balans/balanceOperations';
import { useSelector } from 'react-redux';
import { selectUserBalance } from 'redux/balans/balanceSelectors';
import { useState } from 'react';
import { useEffect } from 'react';

export const Balans = () => {
  const userBalance = useSelector(selectUserBalance);

  const [balance, setBalance] = useState(userBalance ?? '');
  const handleChangeBalance = e => setBalance(e.currentTarget.value);

  const dispatch = useDispatch();

  const isBalanceDisabled = userBalance !== null;

  // const calculatedBalance = balance.toFixed(2).padStart(5, 0);

  useEffect(() => {
    // if (balance !== null) {
    //   return;
    // }
    dispatch(getBalance());
  }, []);

  console.log(userBalance);

  const handleSetBalance = e => {
    e.preventDefault();
    console.log(balance);
    dispatch(updateBalance(Number(balance)));
    setBalance(`${Number(balance).toFixed(2).padStart(5, 0)} UAH`);
  };

  return (
    <Container>
      <p>Balance:</p>
      <form onSubmit={handleSetBalance}>
        <label>
          {/* {calculatedBalance} UAN */}
          <BalansInput
            name="balance"
            // type="number"
            // step="0.01"
            // type="text"
            // pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
            // title="Вalance must be whole numbers (or decimal numbers)"
            placeholder="00.00 UAH"
            value={balance}
            disabled={isBalanceDisabled}
            onChange={handleChangeBalance}
          />
        </label>

        <button type="submit" disabled={isBalanceDisabled}>
          Confirm
        </button>
      </form>
    </Container>
  );
};
