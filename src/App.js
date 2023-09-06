import React, { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput/UserInput";
import ResultsTable from "./Components/ResultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.userInputCurrentSavings;
    const yearlyContribution = +userInput.YearlySavings;
    const expectedReturn = +userInput.EexpectedInterest / 100;
    const duration = +userInput.InvestmentDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }



  return (
    <div>

      <Header />

      <UserInput onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultsTable />

    </div>
  );
}

export default App;
