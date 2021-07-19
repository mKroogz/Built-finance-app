import React from "react";
import { connect } from "react-redux";
import { addBudget } from "../../store/budgets/actionCreators";

interface Props {
  saveBudget: (budget: IBudget | any) => void
}

class AddBudget extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {id:20000, company: "", budget: 0 };
  }  

  render() {
    return (
        <form onSubmit={this.addNewBudget} className="Add-Budget">
        <input
          type="text"
          id="company"
          placeholder="Company"
          onChange={this.handleBudgetData}
        />
        <input
          type="number"
          id="budget"
          placeholder="Budget"
          onChange={this.handleBudgetData}
        />
        <button disabled={this.state === undefined ? true : false}>
          Add Budget
        </button>
      </form>
    );
  }
  handleBudgetData = (e: React.FormEvent<HTMLInputElement>) => {
    let target = e.currentTarget;  
    this.setState((prevState) =>({
      ...prevState,
      [target.id]: target.value,
    }))
  }

  addNewBudget = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.saveBudget(this.state as IBudget);
    this.setState({id:20000, company: "", budget: 0 });
  }
}

export default connect(
  null,
  { addBudget }
)(AddBudget);

