import { useState } from "react";

// creating arithmetic operators for calculation dynamically to avoid
// bunch of buttons hard-coded
const btnArr = ["+", "-", "*", "/"];

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calc = (opr) => {
    // just declared the variable to store the value
    let res;

    // checking each operators that is matching to the particular event we clicked
    if (opr === "+") {
      res = Number(num1) + Number(num2);
    } else if (opr === "-") {
      res = num1 - num2;
    } else if (opr === "*") {
      res = num1 * num2;
    } else if (opr === "/") {
      res = num1 / num2;
    }

    setResult(res);

    // removing the values in input field after calculating
    setNum1("");
    setNum2("");

    // console.log(res);
  };
  return (
    <>
      <form className="calc">
        <h1>react calculator</h1>

        <div>
          <label htmlFor="num1"></label>
          <input
            type="text"
            id="num1"
            placeholder="Num1"
            onChange={(e) => {
              setNum1(e.target.value);
            }}
            value={num1}
          />
        </div>
        <div>
          <label htmlFor="num2"></label>
          <input
            type="text"
            id="num2"
            placeholder="Num2"
            onChange={(e) => {
              setNum2(e.target.value);
            }}
            value={num2}
          />
        </div>

        {btnArr.map((btn) => {
          return (
            <button
              className="btn"
              key={btn}
              onClick={(e) => {
                e.preventDefault();
                calc(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
        {result ? (
          <div>
            <h2>Result = {result}</h2>
            <h4 style={{ color: "green" }}>
              Success: Your result is shown above
            </h4>
          </div>
        ) : (
          <h4 style={{ color: "red" }}>error: input fields cannot be empty </h4>
        )}
      </form>
    </>
  );
};
export default Calculator;
