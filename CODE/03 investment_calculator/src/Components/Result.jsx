import { formatter } from '../util/investment.js';
import {calculateInvestmentResults} from '../util/investment.js'

const Result = ({input}) => {
  const resultData=calculateInvestmentResults(input);
  const intitialInvestment=resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>interest (year)</th>
          <th>Total interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map(yearData=>{
          const totalinterest=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-intitialInvestment;
          const totalAmountInvest=yearData.valueEndOfYear-totalinterest;
          return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalinterest)}</td>
            <td>{formatter.format(totalAmountInvest)}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default Result