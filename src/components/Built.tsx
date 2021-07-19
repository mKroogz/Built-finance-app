import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Budget } from "./budget/Budget"
import AddBudget from "./budget/AddBudget"
import { addBudget, removeBudget } from "../store/budgets/actionCreators"
import { AddLoan } from "./loan/AddLoan"
import { addLoan, removeLoan } from "../store/loans/actionCreators"
import { Dispatch } from "redux"
import { Loan } from "./loan/Loan"

const Built: React.FC = () => {
  const budgets: readonly IBudget[] = useSelector(
    (state: any) => state.budgets.budgets,
    shallowEqual
  )

  const loans: readonly ILoan[] = useSelector(
    (state: any) => state.loans.loans,
    shallowEqual
  )
  // console.log(budgets)
  const [isBudget, setIsBudget] = React.useState(true)

  const toggleView = () => {
    setIsBudget(!isBudget)
  }

  const dispatch: Dispatch<any> = useDispatch()

  const saveBudget = React.useCallback(
    (budget: IBudget) => dispatch(addBudget(budget)),
    [dispatch, addBudget]
  )

  const saveLoan = React.useCallback(
    (loan: ILoan) => dispatch(addLoan(loan)),
    [dispatch, addLoan]
  )

  return isBudget ? (
    <main>
      <h1>All Budgets</h1>
      <AddBudget saveBudget={saveBudget} />
      {budgets.map((budget: IBudget) => (
        <Budget
          key={budget.id}
          budget={budget}
          removeBudget={removeBudget}
        />
      ))}
      <button type="button" onClick={toggleView}>
          Look at Loans
      </button>
    </main>
  ) : (
    <main>
      <h1>All Loans</h1>
      <AddLoan saveLoan={saveLoan} />
      {loans.map((loan: ILoan) => (
        <Loan
          key={loan.id}
          loan={loan}
          removeLoan={removeLoan}
        />
      ))}
      <button type="button" onClick={toggleView}>
          Look at Loans
      </button>
    </main>
  )
}

export default Built