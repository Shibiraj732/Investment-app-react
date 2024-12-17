import Inputs from "./Inputs";
export default function UserInputField({
  inputData,
  handleChange
}) {
  var {initial, annual, expected, duration} = inputData;
  return (
    <section id="user-input">
    <div className="input-group">
      <Inputs handleChange={handleChange} value={initial} label={'initial Amount'} fieldName={'initialInvestment'} />
      <Inputs handleChange={handleChange} value={annual} label={'annual Amount'} fieldName={'annualInvestment'} />
      </div>
      <br/>
      <div className="input-group">
      <Inputs handleChange={handleChange} value={expected} label={'expected Return'}  fieldName={'expectedReturn'} />
      <Inputs handleChange={handleChange} value={duration} label={'duration Time'} fieldName={'duration'} />
      </div>
    </section>
  );
}
