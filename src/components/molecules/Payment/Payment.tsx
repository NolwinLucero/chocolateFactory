import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  credits: number;
  onCreditChangeHandler: (credit: string) => void;
}

const validPayments = ['10c', '20c', '50c', '$1', '$2'];

export const Payment: React.FC<Props> = ({
  credits,
  onCreditChangeHandler,
}) => {
  const [selectedCoin, setSelectedCoin] = useState('');

  const onClickHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (validPayments.indexOf(selectedCoin) < 0) {
      alert('Invalid amount!');
      return;
    }

    if (selectedCoin) {
      onCreditChangeHandler(selectedCoin);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSelectedCoin(val);
  };

  return (
    <>
      <h1 data-testid="credits">Credits: ${credits?.toFixed(2) || 0}</h1>
      <StyledPaymentDiv>
        <form>
          <label>
            Input coin:
            <input
              data-testid="credit"
              type="text"
              onChange={onChangeHandler}
            />
          </label>
          <button data-testid="addCredit" onClick={onClickHandler}>
            Drop
          </button>
        </form>
      </StyledPaymentDiv>
    </>
  );
};

const StyledPaymentDiv = styled.div``;
