import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  loan: ILoan
  removeLoan: (loan: ILoan) => void
}

export const Loan: React.FC<Props> = ({ loan, removeLoan }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteLoan = React.useCallback(
    (loan: ILoan) => dispatch(removeLoan(loan)),
    [dispatch, removeLoan]
  )

  return (
    <div className="Loan">
      <div>
        <h1>{loan.company}</h1>
        <h2>Amount Loaned: {loan.amount}</h2>
      </div>
      <button onClick={() => deleteLoan(loan)}>Delete</button>
    </div>
  )
}