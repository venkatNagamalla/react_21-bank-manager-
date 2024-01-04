// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTrans, deleteHistory} = props
  const {id, title, amount, type} = eachTrans

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="table-heading">
      <p className="history-title">{title}</p>
      <p className="history-amount">Rs {amount}</p>
      <p className="history-amount-type">{type}</p>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="delete-btn"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
