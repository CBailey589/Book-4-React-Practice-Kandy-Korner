import React, { Component } from 'react'
import SingleEmployee from "./SingleEmployee"


class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hireEmployeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Hire Employee
                </button>
                </div>
                <section className="employees">
                    <h3>Meet our employees!</h3>
                    {
                        this.props.TacoEmployees.map(eObj =>
                            <section key={`employeeSection--${eObj.id}`}>
                                <SingleEmployee key={`SingleEmployee--${eObj.id}`}
                                    TacoEmployees={this.props.TacoEmployees}
                                    employee={eObj} />
                                <button
                                key={`fire--${eObj.id}`}
                                onClick={() => {
                                    this.props.fireEmployee(eObj.id)
                                }}>
                                    Fire
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    key={`edit--${eObj.id}`}
                                    onClick={() => {
                                        this.props.history.push(`/employees/${eObj.id}/edit`);
                                    }}>
                                    Edit
                                </button>
                            </section>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList