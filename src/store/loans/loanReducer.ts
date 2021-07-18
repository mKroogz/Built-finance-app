import * as actionTypes from "./actionTypes"

const initialState: LoanState = {
  loans: [
    {
        id: 1,
        company: "Regal Construction",
        amount: 20000,
    },
  ],
}

const loans = (
  state: LoanState = initialState,
  action: LoanAction
): LoanState => {
  switch (action.type) {
    case actionTypes.ADD_LOAN:
      const newLoan: ILoan = {
        id: Math.random(), // not really unique TODO:Fix later
        company: action.loan.company,
        amount: action.loan.amount,
      }
      return {
        ...state,
        loans: state.loans.concat(newLoan),
      }
    case actionTypes.REMOVE_LOAN:
      const updatedLoans: ILoan[] = state.loans.filter(
        loan => loan.id !== action.loan.id
      )
      return {
        ...state,
        loans: updatedLoans,
      }
  }
  return state
}

export default loans