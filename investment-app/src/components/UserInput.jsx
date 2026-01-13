export default function UserInput({ onChange, values }) {

  return (
    <div id="user-input">
      {/* First row */}
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            placeholder="Initial"
            value={values.initialInvestment}
            onChange={(event) =>
              onChange(
                "initialInvestment",
                event.target.value
              )
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            placeholder="Input 2"
            value={values.annualInvestment}
            onChange={(event) =>
              onChange(
                "annualInvestment",
                event.target.value
              )
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            placeholder="Initial"
            value={values.expectedReturn}
            onChange={(event) =>
              onChange(
                "expectedReturn",
                event.target.value
              )
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            placeholder="Input 2"
            value={values.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </div>
  );
}
