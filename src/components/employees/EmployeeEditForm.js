import React, { Component } from "react";
import EmployeeManager from "../../modules/resourceManagers/EmployeeManager"

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

    updateExistingEmployee = evt => {
        evt.preventDefault()

        if (this.state.name === "") {
            window.alert("Please enter a valid name");
        } else {
            const editedEmployeeObj = {
                id: parseInt(this.props.match.params.employeeId),
                name: this.state.name,
                store: parseInt(this.state.store)
            };

            return this.props.updateEmployee(editedEmployeeObj)
                .then(() => this.props.history.push("/employees"))
        }
    }

    componentDidMount() {
        EmployeeManager.GET(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    name: employee.name,
                    store: employee.store
                });
            });
    }

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
                            value = {this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to a Kandy Korner Location</label>
                        <select
                            defaultValue=""
                            name="store"
                            id="store"
                            onChange={this.handleFieldChange}>
                            value= {this.state.store}
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
                        onClick={this.updateExistingEmployee}
                        className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </React.Fragment>
        );
    }
}