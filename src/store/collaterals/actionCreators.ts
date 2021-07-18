import * as actionTypes from "./actionTypes"

export function addCollateral(collateral: ICollateral) {
  const action: CollateralAction = {
    type: actionTypes.ADD_COLLATERAL,
    collateral,
  }

  return simulateHttpRequest(action)
}

export function removeCollateral(collateral: ICollateral) {
  const action: CollateralAction = {
    type: actionTypes.REMOVE_COLLATERAL,
    collateral,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CollateralAction) {
  return (dispatch: DispatchCollateral) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}