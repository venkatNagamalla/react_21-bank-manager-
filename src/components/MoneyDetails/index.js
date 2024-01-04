// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalAmount, income, expenses} = props

  return (
    <div className="list-container">
      <div className="transaction-container container">
        <div className="image-container">
          <img
            className="transaction-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="money-container">
          <p className="money-type">Your Balance</p>
          <p data-testid="balanceAmount" className="money">
            Rs {totalAmount}
          </p>
        </div>
      </div>
      <div className="income-container container">
        <div className="image-container">
          <img
            className="transaction-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="money-container">
          <p className="money-type">Your Income</p>
          <p data-testid="incomeAmount" className="money">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container container">
        <div className="image-container">
          <img
            className="transaction-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="money-container">
          <p className="money-type">Your Expenses</p>
          <p data-testid="expensesAmount" className="money">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
