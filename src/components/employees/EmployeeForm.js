import React, { Component } from "react";

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: "",
        store: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.name === "") {
            window.alert("Please Enter a Name");
        } else {
            const employee = {
                name: this.state.name,
                store: parseInt(this.state.store)
            };

            // Create the employee and redirect user to employee list
            this.props.hireEmployee(employee)
                .then(() => this.props.history.push("/employees"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="EmployeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Employee Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to a Kandy Korner Location</label>
                        <select
                            defaultValue=""
                            name="store"
                            id="store"
                            onChange={this.handleFieldChange}>
                            <option value="">Select a store</option>
                            {this.props.TacoStores.map(store => (
                                <option key={store.id} id={store.id} value={store.id}>
                                    {store.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </React.Fragment>
        );
    }
}