import * as React from "react"

type Props = {
  saveLoan: (loan: ILoan | any) => void
}

export const AddLoan: React.FC<Props> = ({ saveLoan }) => {
  const [loan, setLoan] = React.useState<ILoan | {}>()

  const handleLoanData = (e: React.FormEvent<HTMLInputElement>) => {
    setLoan({
      ...loan,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewLoan = (e: React.FormEvent) => {
    e.preventDefault()
    saveLoan(loan)
  }

  return (
    <form onSubmit={addNewLoan} className="Add-Loan">
      <input
        type="text"
        id="company"
        placeholder="Company"
        onChange={handleLoanData}
      />
      <input
        type="number"
        id="amount"
        placeholder="Loan Amount"
        onChange={handleLoanData}
      />
      <button disabled={loan === undefined ? true : false}>
        Add loan
      </button>
    </form>
  )
}