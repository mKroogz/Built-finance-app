import * as actionTypes from "./actionTypes"

export function addLoan(loan: ILoan) {
  const action: LoanAction = {
    type: actionTypes.ADD_LOAN,
    loan,
  }

  return simulateHttpRequest(action)
}

export function removeLoan(loan: ILoan) {
  const action: LoanAction = {
    type: actionTypes.REMOVE_LOAN,
    loan,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: LoanAction) {
  return (dispatch: DispatchLoan) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}