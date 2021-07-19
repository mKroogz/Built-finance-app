import * as actionTypes from "./actionTypes"

export function addBudget(budget: IBudget) {
    const action: BudgetAction = {
      type: actionTypes.ADD_BUDGET,
      budget,
    }
    console.log(action.budget)
    return simulateHttpRequest(action)
}

export function removeBudget(budget: IBudget) {
  const action: BudgetAction = {
    type: actionTypes.REMOVE_BUDGET,
    budget,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: BudgetAction) {
  return (dispatch: DispatchBudget) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

