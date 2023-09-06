import React, { useState } from 'react';

const UserInput = (props) => {
    const [userInputCurrentSavings, setUserInputCurrentSavings] = useState(1000);
    const [userInputYearlySavings, setUserInputYearlySavings] = useState(1200);
    const [userInputExpectedInterest, setUserInputExpectedInterest] = useState(7);
    const [userInputInvestmentDuration, setUserInputInvestmentDuration] = useState(10);

    const currentSavingsInputHandler = (e) => {
        setUserInputCurrentSavings(e.target.value);
    };

    const yearlySavingsInputHandler = (e) => {
        setUserInputYearlySavings(e.target.value);
    };

    const expectedInterestInputHandler = (e) => {
        setUserInputExpectedInterest(e.target.value);
    };

    const investmentDurationInputHandler = (e) => {
        setUserInputInvestmentDuration(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        

        const userInputData = {
            CurrentSavings: userInputCurrentSavings,
            YearlySavings: userInputYearlySavings,
            EexpectedInterest: userInputExpectedInterest,
            InvestmentDuration: userInputInvestmentDuration,
        };

        props.onCalculate(userInputData );

    };

    const resetHandler = () => {
        setUserInputCurrentSavings('');
        setUserInputYearlySavings('');
        setUserInputExpectedInterest('');
        setUserInputInvestmentDuration('');
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='input-group'>
                <p>
                    <label htmlFor='current-savings'>Current Savings ($)</label>
                    <input
                        type='number'
                        id='current-savings'
                        value={userInputCurrentSavings}
                        onChange={currentSavingsInputHandler}
                    />
                </p>
                <p>
                    <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
                    <input
                        type='number'
                        id='yearly-contribution'
                        value={userInputYearlySavings}
                        onChange={yearlySavingsInputHandler}
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label htmlFor='expected-return'>Expected Interest (%, per year)</label>
                    <input
                        type='number'
                        id='expected-return'
                        value={userInputExpectedInterest}
                        onChange={expectedInterestInputHandler}
                    />
                </p>
                <p>
                    <label htmlFor='duration'>Investment Duration (years)</label>
                    <input
                        type='number'
                        id='duration'
                        value={userInputInvestmentDuration}
                        onChange={investmentDurationInputHandler}
                    />
                </p>
            </div>
            <p className='actions'>
                <button type='reset' className='buttonAlt' onClick={resetHandler}>
                    Reset
                </button>
                <button type='submit' className='button'>
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
