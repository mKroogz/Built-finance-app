import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  budget: IBudget
  removeBudget: (budget: IBudget) => void
}

export const Budget: React.FC<Props> = ({ budget, removeBudget }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteBudget = React.useCallback(
    (budget: IBudget) => dispatch(removeBudget(budget)),
    [dispatch, removeBudget]
  )

  return (
    <div className="Budget">
      <div>
        <h1>{budget.company}</h1>
        <h2>Company Budget: {budget.budget}</h2>
      </div>
      <button onClick={() => deleteBudget(budget)}>Delete</button>
    </div>
  )
}