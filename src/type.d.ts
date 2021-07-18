interface ILoan {
    id: number;
    company: string;
    amount: number;
}
  
type LoanState = {
    loans: ILoan[];
};
  
type LoanAction = {
    type: string;
    loan: ILoan;
};
  
type DispatchLoan = (args: LoanAction) => LoanAction;

interface IBudget {
    id: number;
    company: string;
    budget: number;
}
  
type BudgetState = {
    budgets: IBudget[];
};
  
type BudgetAction = {
    type: string;
    budget: IBudget;
};
  
type DispatchBudget = (args: BudgetAction) => BudgetAction;

interface ICollateral {
    id: number;
    company: string;
    asset: string;
    worth: number;
}
  
type CollateralState = {
    collaterals: ICollateral[];
};
  
type CollateralAction = {
    type: string;
    collateral: ICollateral;
};
  
type DispatchCollateral = (args: CollateralAction) => CollateralAction;
