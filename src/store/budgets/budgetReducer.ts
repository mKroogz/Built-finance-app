import * as actionTypes from "./actionTypes"

const initialState: BudgetState = {
  budgets: [
    {
        id: 1,
        company: "Regal Construction",
        budget: 50000,
    },
  ],
}

const budgets = (
  state: BudgetState = initialState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case actionTypes.ADD_BUDGET:
      const newBudget: IBudget = {
        id: Math.random(), // not really unique TODO:Fix later
        company: action.budget.company,
        budget: action.budget.budget,
      }
      console.log("I am running")
      return {
        ...state,
        budgets: state.budgets.concat(newBudget),
      }
    case actionTypes.REMOVE_BUDGET:
      const updatedBudgets: IBudget[] = state.budgets.filter(
        budget => budget.id !== action.budget.id
      )
      return {
        ...state,
        budgets: updatedBudgets,
      }
  }
  return state
}

export default budgets