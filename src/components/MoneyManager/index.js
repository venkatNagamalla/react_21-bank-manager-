import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionHistoryList: [],
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  addTransactionButton = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTrans => eachTrans.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      type: displayText,
      title,
      amount: parseInt(amount),
    }

    this.setState(prevState => ({
      transactionHistoryList: [
        ...prevState.transactionHistoryList,
        newTransaction,
      ],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {transactionHistoryList} = this.state
    let incomeAmount = 0
    transactionHistoryList.forEach(eachTrans => {
      if (eachTrans.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTrans.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionHistoryList} = this.state
    let expensesAmount = 0
    transactionHistoryList.forEach(eachTrans => {
      if (eachTrans.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTrans.amount
      }
    })
    return expensesAmount
  }

  //   getTotalAmount = () => {
  //     const {transactionHistoryList} = this.state
  //     let incomeAmount = 0
  //     let totalBalance = 0
  //     let expensesAmount = 0
  //     transactionHistoryList.forEach(eachTrans => {
  //       if (eachTrans.type === transactionTypeOptions[0].displayText) {
  //         incomeAmount += eachTrans.amount
  //       } else {
  //         expensesAmount += eachTrans.amount
  //       }
  //     })

  //     totalBalance = incomeAmount - expensesAmount
  //     return totalBalance
  //   }

  deleteHistory = id => {
    const {transactionHistoryList} = this.state

    const filteredHistory = transactionHistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({transactionHistoryList: filteredHistory})
  }

  render() {
    const {title, amount, transactionHistoryList} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()
    const totalAmount = income - expenses

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="name-container">
            <h1 className="name-heading">Hi, Richard</h1>
            <p className="manager-description">
              Welcome back to your{' '}
              <span className="span-element">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalAmount={totalAmount}
            income={income}
            expenses={expenses}
          />
          <div className="bottom-container">
            <div className="add-transaction-container">
              <h1 className="side-heading">Add Transaction</h1>
              <form className="form-container">
                <div className="input-container">
                  <label className="label" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    onChange={this.getTitle}
                    value={title}
                    placeholder="TITLE"
                    className="input"
                    id="title"
                    type="text"
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="amount">
                    AMOUNT
                  </label>
                  <input
                    value={amount}
                    onChange={this.getAmount}
                    placeholder="AMOUNT"
                    className="input"
                    id="amount"
                    type="text"
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="type">
                    TYPE
                  </label>
                  <select
                    onChange={this.getOptionId}
                    id="type"
                    className="input"
                  >
                    {transactionTypeOptions.map(eachOpt => (
                      <option key={eachOpt.optionId} value={eachOpt.optionId}>
                        {eachOpt.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={this.addTransactionButton}
                  type="submit"
                  className="add-btn"
                >
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-side-heading">History</h1>
              <ul className="history-list-container">
                <li className="table-heading">
                  <p className="title-heading">Title</p>
                  <p className="amount-heading">Amount</p>
                  <p className="type-heading">Type</p>
                </li>
                {transactionHistoryList.map(eachTrans => (
                  <TransactionItem
                    eachTrans={eachTrans}
                    deleteHistory={this.deleteHistory}
                    key={eachTrans.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
