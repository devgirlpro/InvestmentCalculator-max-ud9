import React, { useState } from 'react';

const UserInput = () => {
    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlySavings, setYearlySavings] = useState('');
    const [expectedInterest, setExpectedInterest] = useState('');
    const [investmentDuration, setInvestmentDuration] = useState('');

    const currentSavingsInputHandler = (e) => {
        setCurrentSavings(e.target.value);
    };

    const yearlySavingsInputHandler = (e) => {
        setYearlySavings(e.target.value);
    };

    const expectedInterestInputHandler = (e) => {
        setExpectedInterest(e.target.value);
    };

    const investmentDurationInputHandler = (e) => {
        setInvestmentDuration(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const inputData = {
            inputCurrentSavings: currentSavings,
            inputYearlySavings: yearlySavings,
            inpuEexpectedInterest: expectedInterest,
            inputInvestmentDuration: investmentDuration,
        };

        console.log(inputData);
    };

    const resetHandler = () => {
        setCurrentSavings('');
        setYearlySavings('');
        setExpectedInterest('');
        setInvestmentDuration('');
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='input-group'>
                <p>
                    <label htmlFor='current-savings'>Current Savings ($)</label>
                    <input
                        type='number'
                        id='current-savings'
                        value={currentSavings}
                        onChange={currentSavingsInputHandler}
                    />
                </p>
                <p>
                    <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
                    <input
                        type='number'
                        id='yearly-contribution'
                        value={yearlySavings}
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
                        value={expectedInterest}
                        onChange={expectedInterestInputHandler}
                    />
                </p>
                <p>
                    <label htmlFor='duration'>Investment Duration (years)</label>
                    <input
                        type='number'
                        id='duration'
                        value={investmentDuration}
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
