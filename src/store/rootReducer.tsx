import { combineReducers } from 'redux'
import loans from './loans/loanReducer'
import budgets from './budgets/budgetReducer'
import collateral from './collaterals/collateralReducer'

export default combineReducers({
    loans,
    budgets,
    collateral
})