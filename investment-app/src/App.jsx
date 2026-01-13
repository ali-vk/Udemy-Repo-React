import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 1000,
    annualInvestment: 20000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = values.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <UserInput onChange={handleChange} values={values} />
      {inputIsValid && <Result values={values}/>}
      {!inputIsValid && <p className="center">Please enter a valid duration (Greater than 0) </p>}
    </>
  );
}

export default App;
