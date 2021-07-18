import * as actionTypes from "./actionTypes"

const initialState: CollateralState = {collaterals: []}

const collateral = (
  state: CollateralState = initialState,
  action: CollateralAction
): CollateralState => {
  switch (action.type) {
    case actionTypes.ADD_COLLATERAL:
      const newCollateral: ICollateral = {
        id: Math.random(), // not really unique TODO:Fix later
        company: action.collateral.company,
        asset: action.collateral.asset,
        worth: action.collateral.worth,
      }
      return {
        ...state,
        collaterals: state.collaterals.concat(newCollateral),
      }
    case actionTypes.REMOVE_COLLATERAL:
      const updatedCollaterals: ICollateral[] = state.collaterals.filter(
        collateral => collateral.id !== action.collateral.id
      )
      return {
        ...state,
        collaterals: updatedCollaterals,
      }
  }
  return state
}

export default collateral