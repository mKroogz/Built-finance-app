interface ILoan {
    id: number;
    title: string;
    body: string;
}
  
type LoanState = {
    loans: ILoan[];
};
  
type LoanAction = {
    type: string;
    loan: ILoan;
};
  
type DispatchType = (args: LoanAction) => LoanAction;

interface IBudget {
    id: number;
    title: string;
    body: string;
}
  
type BudgetState = {
    budgets: IBudget[];
};
  
type BudgetAction = {
    type: string;
    budget: IBudget;
};
  
type DispatchType = (args: BudgetAction) => BudgetAction;

interface ICollateral {
    id: number;
    title: string;
    body: string;
}
  
type CollateralState = {
    collaterals: ICollateral[];
};
  
type CollateralAction = {
    type: string;
    collateral: ICollateral;
};
  
type DispatchType = (args: CollateralAction) => CollateralAction;
