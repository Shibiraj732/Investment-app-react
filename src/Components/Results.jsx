import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function Results({ inputData }) {
  console.log(inputData);
  const results = calculateInvestmentResults(inputData);
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result,ind) => (
          <tr key={ind}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
            <td>{formatter.format(result.valueEndOfYear-result.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
